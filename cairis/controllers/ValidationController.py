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
  from http.client import BAD_REQUEST, CONFLICT, NOT_FOUND, OK
else:
  import httplib
  from httplib import BAD_REQUEST, CONFLICT, NOT_FOUND, OK
from flask import make_response, request, session, send_file
from flask_restful import Resource
from flask_restful_swagger import swagger
from cairis.core.ARM import DatabaseProxyException, ARMException
from cairis.core.Borg import Borg
from cairis.daemon.CairisHTTPError import MalformedJSONHTTPError, CairisHTTPError, ARMHTTPError, MissingParameterHTTPError
from cairis.data.ValidationDAO import ValidationDAO
from cairis.tools.JsonConverter import json_serialize
from cairis.tools.MessageDefinitions import ValidationMessage
from cairis.tools.ModelDefinitions import ValidationModel
from cairis.tools.SessionValidator import get_session_id
from io import StringIO

__author__ = 'Shamal Faily'


class ValidationAPI(Resource):
  # region Swagger Doc
  @swagger.operation(
    notes='Validate CAIRIS model',
    nickname='cairis-validation',
    responseClass=ValidationModel.__name__,
    responseContainer='List',
    parameters=[
      {
        "name": "session_id",
        "description": "The ID of the user's session",
        "required": False,
        "allowMultiple": False,
        "dataType": str.__name__,
        "paramType": "query"
      }
    ],
    responseMessages=[
      {
        'code': BAD_REQUEST,
        'message': 'Error validating model'
      },
    ]
  )
  # endregion
  def get(self,name):
    session_id = get_session_id(session, request)
    dao = ValidationDAO(session_id)
    objts = dao.model_validation(name)
    dao.close()
    resp = make_response(json_serialize(objts, session_id=session_id))
    resp.headers['Content-Type'] = "application/json"
    return resp
