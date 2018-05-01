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
from cairis.data.TraceDAO import TraceDAO
from cairis.tools.JsonConverter import json_serialize
from cairis.tools.MessageDefinitions import TraceMessage
from cairis.tools.ModelDefinitions import TraceModel
from cairis.tools.SessionValidator import get_session_id

__author__ = 'Shamal Faily'


class TraceByEnvironmentAPI(Resource):

  def get(self,environment_name):
    session_id = get_session_id(session, request)

    dao = TraceDAO(session_id)
    trs = dao.get_traces(environment_name)
    dao.close()

    resp = make_response(json_serialize(trs, session_id=session_id))
    resp.headers['Content-Type'] = "application/json"
    return resp


class TracesAPI(Resource):

  def post(self):
    session_id = get_session_id(session, request)

    dao = TraceDAO(session_id)
    new_tr = dao.from_json(request)
    dao.add_trace(new_tr)
    dao.close()

    resp_dict = {'message': 'Trace successfully added'}
    resp = make_response(json_serialize(resp_dict, session_id=session_id), OK)
    resp.contenttype = 'application/json'
    return resp


class TraceByNameAPI(Resource):

  def delete(self, from_object,from_name,to_object,to_name):
    session_id = get_session_id(session, request)

    dao = TraceDAO(session_id)
    dao.delete_trace(from_object,from_name,to_object,to_name)
    dao.close()

    resp_dict = {'message': 'Trace successfully deleted'}
    resp = make_response(json_serialize(resp_dict), OK)
    resp.contenttype = 'application/json'
    return resp

class TraceDimensionsAPI(Resource):

  def get(self, dimension_name,is_from):
    session_id = get_session_id(session, request)

    dao = TraceDAO(session_id)
    if is_from == '1':
      is_from = True
    else:
      is_from = False

    dims = dao.trace_dimensions(dimension_name,is_from)
    dao.close()

    resp = make_response(json_serialize(dims, session_id=session_id), OK)
    resp.headers['Content-type'] = 'application/json'
    return resp
