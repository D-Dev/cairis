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
from flask import session, request, make_response
from flask_restful import Resource
from cairis.data.TemplateRequirementDAO import TemplateRequirementDAO
from cairis.tools.JsonConverter import json_serialize
from cairis.tools.MessageDefinitions import TemplateRequirementMessage
from cairis.tools.ModelDefinitions import TemplateRequirementModel
from cairis.tools.SessionValidator import get_session_id

__author__ = 'Shamal Faily'


class TemplateRequirementsAPI(Resource):

  def get(self):
    session_id = get_session_id(session, request)
    constraint_id = request.args.get('constraint_id', -1)

    dao = TemplateRequirementDAO(session_id)
    trs = dao.get_template_requirements(constraint_id=constraint_id)
    dao.close()

    resp = make_response(json_serialize(trs, session_id=session_id))
    resp.headers['Content-Type'] = "application/json"
    return resp

  def post(self):
    session_id = get_session_id(session, request)

    dao = TemplateRequirementDAO(session_id)
    new_tr = dao.from_json(request)
    dao.add_template_requirement(new_tr)
    dao.close()

    resp_dict = {'message': 'Template Requirement successfully added'}
    resp = make_response(json_serialize(resp_dict, session_id=session_id), OK)
    resp.contenttype = 'application/json'
    return resp


class TemplateRequirementByNameAPI(Resource):

  def get(self, name):
    session_id = get_session_id(session, request)

    dao = TemplateRequirementDAO(session_id)
    found_tr = dao.get_template_requirement(name)
    dao.close()

    resp = make_response(json_serialize(found_tr, session_id=session_id))
    resp.headers['Content-Type'] = "application/json"
    return resp

  def put(self, name):
    session_id = get_session_id(session, request)

    dao = TemplateRequirementDAO(session_id)
    upd_tr = dao.from_json(request)
    dao.update_template_requirement(upd_tr, name)
    dao.close()

    resp_dict = {'message': 'Template Requirement successfully updated'}
    resp = make_response(json_serialize(resp_dict), OK)
    resp.contenttype = 'application/json'
    return resp

  def delete(self, name):
    session_id = get_session_id(session, request)

    dao = TemplateRequirementDAO(session_id)
    dao.delete_template_requirement(name)
    dao.close()

    resp_dict = {'message': 'Template Requirement successfully deleted'}
    resp = make_response(json_serialize(resp_dict), OK)
    resp.contenttype = 'application/json'
    return resp
