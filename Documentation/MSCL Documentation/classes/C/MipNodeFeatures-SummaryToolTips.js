NDSummary.OnToolTipsLoaded("CClass:MipNodeFeatures",{2154:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2154\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",2156:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2156\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeFeatures object.</div></div>",2158:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2158\" class=\"NDPrototype NoParameterForm\">MipNodeInfo m_nodeInfo</div><div class=\"TTSummary\">The MipNodeInfo.</div></div>",2160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2160\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;MipNodeFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a MipNodeFeatures pointer based on the given parameters.</div></div>",2161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2161\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the uint16 descriptor value is a Channel field or not.</div></div>",2162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2162\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCategory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not a given MipTypes::DataClass is supported by the Node.</div></div>",2163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2163\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">commandId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given MipTypes::Command is supported by the Node.</div></div>",2164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2164\" class=\"NDPrototype NoParameterForm\">MipTypes::MipCommands supportedCommands() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported &lt;MipTypes::MipCommands&gt; that are supported by the Node.</div></div>",2165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2165\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipTypes::MipChannelFields supportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported channel fields for a given MipTypes::DataClass.</div></div>",2166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2166\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for a given MipTypes::DataClass.</div></div>",2167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> HeadingUpdateOptionsList supportedHeadingUpdateOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported heading update control options for this node.</div></div>",2168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2168\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EstimationControlOptions supportedEstimationControlOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the estimation control options supported by this node.</div></div>",2169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2169\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> VehicleModeTypes supportedVehicleModeTypes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported vehicle mode types for this node.</div></div>",2170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2170\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveMeasurementModes supportedAdaptiveMeasurementModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive measurement modes supported by this node.</div></div>"});