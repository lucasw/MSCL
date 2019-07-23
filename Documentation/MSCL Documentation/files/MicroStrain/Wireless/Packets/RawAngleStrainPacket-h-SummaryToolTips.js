NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/RawAngleStrainPacket.h",{4891:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4891\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RawAngleStrainPacket</div></div></div><div class=\"TTSummary\">A WirelessDataPacket derived class representing a Raw Angle Strain packet.</div></div>",4893:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4893\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> RawAngleStrainPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an RawAngleStrainPacket from the passed in WirelessPacket.</div></div>",4894:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4894\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps()</div><div class=\"TTSummary\">Parses the passed in WirelessPacket for all the sweep information and adds a sweep to the sweeps container</div></div>",4895:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4895\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed RawAngleStrainPacket</div></div>",4896:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4896\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> UniqueWirelessPacketId getUniqueId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the unique Id of the WirelessPacket passed in</div></div>",4897:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4897\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::vector&lt;<span class=\"SHKeyword\">float</span>&gt; distributeAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">low,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">high,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of angles based on a low, high, and number of angles.</div></div>",4898:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4898\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> buildChannelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a channel name for the Raw Angle Strain data.</div></div>"});