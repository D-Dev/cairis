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

from .ObjectCreationParameters import ObjectCreationParameters

__author__ = 'Shamal Faily'

class DataFlowParameters(ObjectCreationParameters):
  def __init__(self,dfName,envName,fromName,fromType,toName,toType,dfAssets):
    ObjectCreationParameters.__init__(self)
    self.theName = dfName
    self.theEnvironmentName = envName
    self.theFromName = fromName
    self.theFromType = fromType
    self.theToName = toName
    self.theToType = toType
    self.theAssets = dfAssets

  def name(self): return self.theName
  def environment(self): return self.theEnvironmentName
  def fromName(self): return self.theFromName
  def fromType(self): return self.theFromType
  def toName(self): return self.theToName
  def toType(self): return self.theToType
  def assets(self): return self.theAssets
