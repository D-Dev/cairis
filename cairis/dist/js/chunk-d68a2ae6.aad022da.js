(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d68a2ae6"],{"584a":function(e,t){var a=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=a)},a21f:function(e,t,a){var s=a("584a"),l=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},de18:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"objectsview"},[a("objects",{attrs:{breadCrumbItems:e.bcItems,fieldList:e.objectsFields,getUrl:e.theGetUrl,delUrl:e.theDelUrl,dimName:e.dimension}})],1)},l=[],o=a("0d49"),i={architecturalpattern:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Architectural patterns",to:{name:"objectsview",params:{dimension:"architecturalpattern"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name"},"theAttackSurfaceMetric.theInterfacesDER":{label:"Interfaces DER"},"theAttackSurfaceMetric.theChannelsDER":{label:"Channels DER"},"theAttackSurfaceMetric.theUntrustedSurfaceDER":{label:"Untrusted Surface DER"},sitaction:{label:"Situate"}},theGetUrl:"/api/architectural_patterns",theDelUrl:"/api/architectural_patterns/name/"},asset:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Assets",to:{name:"objectsview",params:{dimension:"asset"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Asset",sortable:!0},theType:{label:"Type",sortable:!0},postaction:{label:""}},theGetUrl:"/api/assets/summary",theDelUrl:"/api/assets/name/"},assetassociation:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Asset associations",to:{name:"objectsview",params:{dimension:"assetassociation"}}}],objectsFields:{objectsactions:{label:""},theEnvironmentName:{label:"Environment",sortable:!0},theHeadAsset:{label:"Head",sortable:!0},theHeadNavigation:{label:"Nav",sortable:!0},theHeadType:{label:"Type",sortable:!0},theHeadMultiplicity:{label:"Nry",sortable:!0},theHeadRole:{label:"Role",sortable:!0},theTailRole:{label:"Role",sortable:!0},theTailMultiplicity:{label:"Nry",sortable:!0},theTailType:{label:"Type",sortable:!0},theTailNavigation:{label:"Nav",sortable:!0},theTailAsset:{label:"Head",sortable:!0}},theGetUrl:"/api/assets/association",theDelUrl:"/api/assets/association/environment/"},attacker:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Attackers",to:{name:"objectsview",params:{dimension:"attacker"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Attacker",sortable:!0},theDescription:{label:"Description"}},theGetUrl:"/api/attackers/summary",theDelUrl:"/api/attackers/name/"},conceptreference:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Concept references",to:{name:"objectsview",params:{dimension:"conceptreference"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDimName:{label:"Dimension",sortable:!0}},theGetUrl:"/api/concept_references",theDelUrl:"/api/concept_references/name/"},countermeasure:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Countermeasures",to:{name:"objectsview",params:{dimension:"countermeasure"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0}},theGetUrl:"/api/countermeasures",theDelUrl:"/api/countermeasures/name/"},dataflow:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Dataflows",to:{name:"objectsview",params:{dimension:"dataflow"}}}],objectsFields:{objectsactions:{label:""},theEnvironmentName:{label:"Environment",sortable:!0},theName:{label:"Name",sortable:!0},theFromName:{label:"From",sortable:!0},theFromType:{label:"Type",sortable:!0},theToName:{label:"To",sortable:!0},theToType:{label:"Type",sortable:!0}},theGetUrl:"/api/dataflows",theDelUrl:"/api/dataflows/name/"},dependency:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Dependencies",to:{name:"objectsview",params:{dimension:"dependency"}}}],objectsFields:{objectsactions:{label:""},theEnvironmentName:{label:"Environment",sortable:!0},theDepender:{label:"Depender",sortable:!0},theDependee:{label:"Dependee",sortable:!0},theDependencyType:{label:"Type",sortable:!0},theDependency:{label:"Dependency",sortable:!0}},theGetUrl:"/api/dependencies",theDelUrl:"/api/dependencies/environment/"},documentreference:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Document references",to:{name:"objectsview",params:{dimension:"documentreference"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDocName:{label:"Document",sortable:!0},pretaction:{label:""}},theGetUrl:"/api/document_references",theDelUrl:"/api/document_references/name/"},domainproperty:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Domain properties",to:{name:"objectsview",params:{dimension:"domainproperty"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0},postaction:{label:""}},theGetUrl:"/api/domainproperties",theDelUrl:"/api/domainproperties/name/"},environment:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Environments",to:{name:"objectsview",params:{dimension:"environment"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDescription:{label:"Description"}},theGetUrl:"/api/environments",theDelUrl:"/api/environments/name/"},externaldocument:{bcItems:[{text:"Home",to:{name:"home"}},{text:"External documents",to:{name:"objectsview",params:{dimension:"externaldocument"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDescription:{label:"Description"}},theGetUrl:"/api/external_documents",theDelUrl:"/api/external_documents/name/"},goal:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Goals",to:{name:"objectsview",params:{dimension:"goal"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theOriginator:{label:"Originator",sortable:!0},theStatus:{label:"Status"}},theGetUrl:"/api/goals/summary",theDelUrl:"/api/goals/name/"},kaosassociation:{bcItems:[{text:"Home",to:{name:"home"}},{text:"KAOS associations",to:{name:"objectsview",params:{dimension:"kaosassociation"}}}],objectsFields:{objectsactions:{label:""},theEnvironmentName:{label:"Environment",sortable:!0},theGoal:{label:"Goal",sortable:!0},theGoalDimension:{label:"Dimension",sortable:!0},theAssociationType:{label:"Association",sortable:!0},theSubGoal:{label:"Sub Goal",sortable:!0},theSubGoalDimension:{label:"Dimension",sortable:!0}},theGetUrl:"/api/goals/association",theDelUrl:"/api/goals/association/environment/"},locations:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Locations",to:{name:"objectsview",params:{dimension:"locations"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0}},theGetUrl:"/api/locations",theDelUrl:"/api/locations/name/"},obstacle:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Obstacles",to:{name:"objectsview",params:{dimension:"obstacle"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theOriginator:{label:"Originator",sortable:!0}},theGetUrl:"/api/obstacles/summary",theDelUrl:"/api/obstacles/name/"},persona:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Personas",to:{name:"objectsview",params:{dimension:"persona"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0}},theGetUrl:"/api/personas/summary",theDelUrl:"/api/personas/name/"},personacharacteristic:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Persona characteristics",to:{name:"objectsview",params:{dimension:"personacharacteristic"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theVariable:{label:"Variable",sortable:!0},theCharacteristic:{label:"Characteristic",sortable:!0}},theGetUrl:"/api/persona_characteristics/summary",theDelUrl:"/api/persona_characteristics/name/"},response:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Responses",to:{name:"objectsview",params:{dimension:"response"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theResponseType:{label:"Type",sortable:!0},generategoalaction:{label:"Goal"}},theGetUrl:"/api/responses",theDelUrl:"/api/responses/name/"},requirement:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Requirements",to:{name:"objectsview",params:{dimension:"requirement"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Requirement",sortable:!0},theDescription:{label:"Description"},thePriority:{label:"Priority",sortable:!0},theRationale:{label:"Rationale"},theFitCriterion:{label:"Fit Criterion"},theOriginator:{label:"Originator",sortable:!0},theType:{label:"Type",sortable:!0},pretaction:{label:""},postaction:{label:""}},theGetUrl:"",theDelUrl:"/api/requirements/name/"},risk:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Risks",to:{name:"objectsview",params:{dimension:"risk"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theVulnerability:{label:"Vulnerability",sortable:!0},theThreat:{label:"Threat",sortable:!0}},theGetUrl:"/api/risks/summary",theDelUrl:"/api/risks/name/"},role:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Roles",to:{name:"objectsview",params:{dimension:"role"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Role",sortable:!0},theType:{label:"Type",sortable:!0},theDescription:{label:"Description"},pretaction:{label:""}},theGetUrl:"/api/roles",theDelUrl:"/api/roles/name/"},securitypattern:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Security patterns",to:{name:"objectsview",params:{dimension:"securitypattern"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name"}},theGetUrl:"/api/security_patterns",theDelUrl:"/api/security_patterns/name/"},task:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Tasks",to:{name:"objectsview",params:{dimension:"task"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theObjective:{label:"Objective"},pretaction:{label:""},postaction:{label:""}},theGetUrl:"/api/tasks",theDelUrl:"/api/tasks/name/"},taskcharacteristic:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Task characteristics",to:{name:"objectsview",params:{dimension:"taskcharacteristic"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Characteristic",sortable:!0},theTaskName:{label:"Task",sortable:!0}},theGetUrl:"/api/task_characteristics",theDelUrl:"/api/task_characteristics/name/"},templateasset:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Template assets",to:{name:"objectsview",params:{dimension:"templateasset"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0}},theGetUrl:"/api/template_assets",theDelUrl:"/api/template_assets/name/"},templategoal:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Template goals",to:{name:"objectsview",params:{dimension:"templategoal"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDefinition:{label:"Definition",sortable:!0}},theGetUrl:"/api/template_goals",theDelUrl:"/api/template_goals/name/"},templaterequirement:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Template requirements",to:{name:"objectsview",params:{dimension:"templaterequirement"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0}},theGetUrl:"/api/template_requirements",theDelUrl:"/api/template_requirements/name/"},threat:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Threats",to:{name:"objectsview",params:{dimension:"threat"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0},introduceaction:{label:""}},theGetUrl:"/api/threats/summary",theDelUrl:"/api/threats/name/"},trustboundary:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Trust boundaries",to:{name:"objectsview",params:{dimension:"trustboundary"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDescription:{label:"Description"}},theGetUrl:"/api/trust_boundaries",theDelUrl:"/api/trust_boundaries/name/"},usecase:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Use cases",to:{name:"objectsview",params:{dimension:"usecase"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theDescription:{label:"Description"},pretaction:{label:""},postaction:{label:""}},theGetUrl:"/api/usecases/summary",theDelUrl:"/api/usecases/name/"},vulnerability:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Vulnerabilities",to:{name:"objectsview",params:{dimension:"vulnerability"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0},pretaction:{label:""},introduceaction:{label:""}},theGetUrl:"/api/vulnerabilities",theDelUrl:"/api/vulnerabilities/name/"}},n=i,r={props:{dimension:String},watch:{dimension:"setData"},components:{Objects:o["default"]},data:function(){return{bcItems:[],items:[],objectsFields:{},theGetUrl:"",theDelUrl:""}},methods:{setData:function(){var e=n[this.dimension];this.bcItems=e.bcItems,this.objectsFields=e.objectsFields,this.theGetUrl=e.theGetUrl,this.theDelUrl=e.theDelUrl}},mounted:function(){this.setData()}},m=r,b=a("2877"),c=Object(b["a"])(m,s,l,!1,null,null,null);t["default"]=c.exports},f499:function(e,t,a){e.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-d68a2ae6.aad022da.js.map