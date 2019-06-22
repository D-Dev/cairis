#  Licensed to the Apache Software Foundation (ASF) under one
#  or more contributor license agreements.  See the NOTICE file
#  distributed with this work for additional information
#  regarding copyright ownership.  The ASF licenses this file
#  to you under the Apache License, Version 2.0 (the
#  "License"); you may not use this file except in compliance
#  with the License.  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing,
#  software distributed under the License is distributed on an
#  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
#  specific language governing permissions and limitations
#  under the License.

import sys
if (sys.version_info > (3,)):
  import http.client
else:
  import httplib
import imghdr
import os
import io
from cairis.core.ARM import *
from cairis.core.Borg import Borg
from cairis.daemon.CairisHTTPError import CairisHTTPError, ARMHTTPError
from cairis.data.CairisDAO import CairisDAO
from cairis.core.dba import isOwner,grantDatabaseAccess,revokeDatabaseAccess

__author__ = 'Shamal Faily'


class PermissionsDAO(CairisDAO):

  def __init__(self, session_id):
    CairisDAO.__init__(self, session_id)
    b = Borg()

  def set_permission(self,db_name, user_id, permission):

    if (permission != 'grant' and permission != 'revoke'):
      raise CairisHTTPError(status_code=http.client.CONFLICT,status="Invalid permission",message=permission + " is an invalid permission.")

    try:
      b = Borg()
      dbUser = b.get_settings(self.session_id)['dbUser']

      if (isOwner(dbUser,db_name) == False):
        raise CairisHTTPError(status_code=http.client.CONFLICT,status="Unauthorised permission",message="Cannot change permissions as you are not the database owner.")

      if (permission == 'grant'):
        grantDatabaseAccess(b.rPasswd, b.dbHost, b.dbPort, db_name, user_id)
      else:
        revokeDatabaseAccess(b.rPasswd, b.dbHost, b.dbPort, db_name, user_id)
    except ARMException as ex:
      self.close()
      raise ARMHTTPError(ex)
