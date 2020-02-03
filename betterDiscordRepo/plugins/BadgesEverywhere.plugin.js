//META{"name":"BadgesEverywhere","website":"https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/BadgesEverywhere","source":"https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Plugins/BadgesEverywhere/BadgesEverywhere.plugin.js"}*//

class BadgesEverywhere {
	getName () {return "BadgesEverywhere";} 

	getVersion () {return "1.5.1";}

	getAuthor () {return "DevilBro";}

	getDescription () {return "Displays Badges (Nitro, HypeSquad, etc...) in the chat/memberlist/userpopout.";}

	constructor () {
		this.changelog = {
			"fixed":[["Bug Hunter Badgess & Boost Ranks","Fixed badges for the new rans for the bug hunter badge and guild boost badge"]],
			"improved":[["New Library Structure & React","Restructured my Library and switched to React rendering instead of DOM manipulation"]]
		};

		this.patchedModules = {
			after: {
				MemberListItem: "render",
				MessageUsername: "render",
				UserPopout: "render"
			}
		};
	}

	initConstructor () {
		this.css = `
			.BE-badge {
				position: relative;
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				margin: 0 2px;
			}
			.BE-badge.BE-badge-popout {
				margin-top: 6px;
			}
			.BE-badge.BE-badge-popout:not(.BE-badge-CurrentGuildBoost) {
				top: 3px;
			}
			.BE-badge.BE-badge-popout.BE-badge-CurrentGuildBoost {
				top: 1px;
			}
			.BE-badge.BE-badge-list:not(.BE-badge-CurrentGuildBoost) {
				top: 1px;
			}
			.BE-badge.BE-badge-chat:not(.BE-badge-CurrentGuildBoost) {
				top: 2px;
			}
			.BE-badge.BE-badge-chat.BE-badge-CurrentGuildBoost {
				top: 1px;
			}
			${BDFDB.dotCN.userprofiletopsectionplaying} .BE-badge.BE-badge-CurrentGuildBoost svg {
				color: white !important;
			}
			.BE-badge {height:17px !important;}
			.BE-badge.BE-size-17 {width:17px !important; min-width:17px !important;}
			.BE-badge.BE-size-21 {width:21px !important; min-width:21px !important;}
			.BE-badge.BE-size-22 {width:22px !important; min-width:22px !important;}
			.BE-badge.BE-size-24 {width:24px !important; min-width:24px !important;}
			.BE-badge.BE-badge-mini {height:14px !important;}
			.BE-badge.BE-badge-mini.BE-size-17 {width:14px !important; min-width:14px !important;}
			.BE-badge.BE-badge-mini.BE-size-21 {width:18px !important; min-width:18px !important;}
			.BE-badge.BE-badge-mini.BE-size-22 {width:18px !important; min-width:18px !important;}
			.BE-badge.BE-badge-mini.BE-size-24 {width:19px !important; min-width:19px !important;}
			.BE-badge.BE-badge-mini.BE-badge-CurrentGuildBoost {height:12px !important;}
			
			.BE-badge.BE-badge-mini:first-of-type {
				margin-left: 5px;
			}
			.BE-badge.BE-badge-mini:last-of-type {
				margin-right: 0;
			}

			.BE-badge.BE-badge-CurrentGuildBoost {height:14px !important; width:14px !important; min-width:14px !important;}

			#app-mount .BE-badge.BE-badge-settings {width:30px !important;min-width:30px !important;}

			${BDFDB.dotCNS.member + BDFDB.dotCN.memberpremiumicon}:not(.BE-badge-CurrentGuildBoost-inner) {display: none;}`;

		this.requestedusers = {};
		this.loadedusers = {};
		this.RequestQueue = {queue:[], running:false, timeout:null};

		this.defaults = {
			settings: {
				showInPopout:		{value:true, 	description:"Show Badge in User Popout."},
				showInChat:			{value:true, 	description:"Show Badge in Chat Window."},
				showInMemberList:	{value:true, 	description:"Show Badge in Member List."},
				useColoredVersion:	{value:true, 	description:"Use colored version of the Badges for Chat and Members."},
				showNitroDate:		{value:true, 	description:"Show the subscription date for Nitro/Boost Badges"}
			},
			badges: {
				"STAFF":						{value:true, 	id:"Staff",				name:"STAFF_BADGE_TOOLTIP",			icon:"profileBadgeStaff",						px:17},
				"PARTNER":						{value:true, 	id:"Partner",			name:"PARTNER_BADGE_TOOLTIP",		icon:"profileBadgePartner",						px:22},
				"HYPESQUAD":					{value:true, 	id:"HypeSquad",			name:"HYPESQUAD_BADGE_TOOLTIP",		icon:"profileBadgeHypesquad",					px:17},
				"BUG_HUNTER_LEVEL_1":			{value:true, 	id:"BugHunter1",		name:"BUG_HUNTER_BADGE_TOOLTIP",	icon:"profileBadgeBugHunterLevel1",				px:17,	suffix: "Level 1"},
				"BUG_HUNTER_LEVEL_2":			{value:true, 	id:"BugHunter2",		name:"BUG_HUNTER_BADGE_TOOLTIP",	icon:"profileBadgeBugHunterLevel2",				px:17,	suffix: "Level 2"},
				"MFA_SMS":						{value:false, 	id:null,				name:null,							icon:false,										px:0},
				"PREMIUM_PROMO_DISMISSED":		{value:false, 	id:null,				name:null,							icon:false,										px:0},
				"HYPESQUAD_ONLINE_HOUSE_1":		{value:true, 	id:"HypeSquad1",		name:"HypeSquad Bravery",			icon:"profileBadgeHypeSquadOnlineHouse1",		px:17},
				"HYPESQUAD_ONLINE_HOUSE_2":		{value:true, 	id:"HypeSquad2",		name:"HypeSquad Brilliance",		icon:"profileBadgeHypeSquadOnlineHouse2",		px:17},
				"HYPESQUAD_ONLINE_HOUSE_3":		{value:true, 	id:"HypeSquad3",		name:"HypeSquad Balance",			icon:"profileBadgeHypeSquadOnlineHouse3",		px:17},
				"PREMIUM_EARLY_SUPPORTER":		{value:true, 	id:"EarlySupporter",	name:"EARLY_SUPPORTER_TOOLTIP",		icon:"profileBadgeEarlySupporter",				px:24},
				"NITRO":						{value:true, 	id:"Nitro",				name:"Nitro",						icon:"profileBadgePremium",						px:21},
				"SYSTEM":						{value:false, 	id:null,				name:null,							icon:null,										px:0},
				"HAS_UNREAD_URGENT_MESSAGES":	{value:false, 	id:null,				name:null,							icon:null,										px:0},
				"GUILD_BOOST":					{value:true, 	id:"NitroGuildBoost",	name:"Nitro Guild Boost", 			icon:"profileGuildSubscriberlvl",				px:17,	types:[1,2,3,4,5,6,7,8,9]},
			},
			indicators: {
				"CURRENT_GUILD_BOOST":		{value:true, 	id:"CurrentGuildBoost",		name:"Current Nitro Guild Boost", 	inner:`<svg name="PremiumGuildSubscriberBadge" class="BE-badge-CurrentGuildBoost-inner ${BDFDB.disCNS.memberpremiumicon + BDFDB.disCN.membericon}" aria-hidden="false" width="24" height="24" viewBox="0 0 8 12" style="margin: 0;"><path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor"></path><path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor"></path></svg>`},
			}
		};

		for (let flagname in BDFDB.DiscordConstants.UserFlags) if (this.defaults.badges[flagname]) {
			if (BDFDB.LanguageUtils.LanguageStringsCheck[this.defaults.badges[flagname].name]) this.defaults.badges[flagname].name = BDFDB.LanguageUtils.LanguageStrings[this.defaults.badges[flagname].name];
			this.defaults.badges[BDFDB.DiscordConstants.UserFlags[flagname]] = this.defaults.badges[flagname];
			delete this.defaults.badges[flagname];
		}
		this.nitroflag = Math.max(...BDFDB.ObjectUtils.toArray(BDFDB.DiscordConstants.UserFlags)) * 2;
		this.defaults.badges[this.nitroflag] = this.defaults.badges.NITRO;
		delete this.defaults.badges.NITRO;
		this.boostflag = this.nitroflag * 2;
		this.defaults.badges[this.boostflag] = this.defaults.badges.GUILD_BOOST;
		delete this.defaults.badges.GUILD_BOOST;
		for (let flag in this.defaults.badges) if (!this.defaults.badges[flag].icon || isNaN(parseInt(flag))) delete this.defaults.badges[flag];
	}

	getSettingsPanel () {
		if (!window.BDFDB || typeof BDFDB != "object" || !BDFDB.loaded || !this.started) return;
		let settings = BDFDB.DataUtils.get(this, "settings");
		let badges = BDFDB.DataUtils.get(this, "badges");
		let indicators = BDFDB.DataUtils.get(this, "indicators");
		let settingspanel, settingsitems = [], inneritems = [];
		
		for (let key in settings) settingsitems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
			className: BDFDB.disCN.marginbottom8,
			type: "Switch",
			plugin: this,
			keys: ["settings", key],
			label: this.defaults.settings[key].description,
			value: settings[key]
		}));
		for (let flag in badges) inneritems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
			className: BDFDB.disCN.marginbottom8,
			type: "Switch",
			plugin: this,
			keys: ["badges", flag],
			label: this.defaults.badges[flag].name + (this.defaults.badges[flag].suffix ? ` ${this.defaults.badges[flag].suffix}` : ""),
			value: badges[flag],
			labelchildren: this.createSettingsBadges(flag)
		}));
		for (let flag in indicators) inneritems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
			className: BDFDB.disCN.marginbottom8,
			type: "Switch",
			plugin: this,
			keys: ["indicators", flag],
			label: this.defaults.indicators[flag].name + (this.defaults.indicators[flag].suffix ? ` ${this.defaults.indicators[flag].suffix}` : ""),
			value: indicators[flag],
			labelchildren: this.createSettingsBadges(flag)
		}));
		settingsitems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsPanelInner, {
			title: "Display Badges:",
			first: settingsitems.length == 0,
			last: true,
			children: inneritems
		}));
		
		return settingspanel = BDFDB.PluginUtils.createSettingsPanel(this, settingsitems);
	}

	//legacy
	load () {}

	start () {
		if (!window.BDFDB) window.BDFDB = {myPlugins:{}};
		if (window.BDFDB && window.BDFDB.myPlugins && typeof window.BDFDB.myPlugins == "object") window.BDFDB.myPlugins[this.getName()] = this;
		let libraryScript = document.querySelector("head script#BDFDBLibraryScript");
		if (!libraryScript || (performance.now() - libraryScript.getAttribute("date")) > 600000) {
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("id", "BDFDBLibraryScript");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.min.js");
			libraryScript.setAttribute("date", performance.now());
			libraryScript.addEventListener("load", _ => {this.initialize();});
			document.head.appendChild(libraryScript);
		}
		else if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) this.initialize();
		this.startTimeout = setTimeout(_ => {
			try {return this.initialize();}
			catch (err) {console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not initiate plugin! " + err);}
		}, 30000);
	}

	initialize () {
		if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			if (this.started) return;
			BDFDB.PluginUtils.init(this);

			this.BadgeClasses = BDFDB.ModuleUtils.findByProperties("profileBadgeStaff", "profileBadgePremium");

			BDFDB.ModuleUtils.forceAllUpdates(this);
		}
		else console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not load BD functions!");
	}

	stop () {
		if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			this.stopping = true;
			
			BDFDB.TimeUtils.clear(this.RequestQueue.timeout);
			
			BDFDB.PluginUtils.clear(this);
		}
	}


	// begin of own functions

	onSettingsClosed () {
		if (this.SettingsUpdated) {
			delete this.SettingsUpdated;
			BDFDB.ModuleUtils.forceAllUpdates(this);
		}
	}

	processMemberListItem (e) {
		if (e.instance.props.user && BDFDB.DataUtils.get(this, "settings", "showInMemberList")) {
			this.injectBadges(e.instance, BDFDB.ReactUtils.getValue(e.returnvalue, "props.decorators.props.children"), e.instance.props.user, "list");
		}
	}

	processMessageUsername (e) {
		let user = BDFDB.ReactUtils.getValue(e.instance, "props.message.author");
		if (user && typeof e.returnvalue.props.children == "function" && BDFDB.DataUtils.get(this, "settings", "showInChat")) {
			let renderChildren = e.returnvalue.props.children;
			e.returnvalue.props.children = (...args) => {
				let renderedChildren = renderChildren(...args);
				this.injectBadges(e.instance, renderedChildren.props.children, user, "chat");
				return renderedChildren;
			};
		}
	}

	processUserPopout (e) {
		if (e.instance.props.user && BDFDB.DataUtils.get(this, "settings", "showInPopout")) {
			let [children, index] = BDFDB.ReactUtils.findChildren(e.returnvalue, {name: "CustomStatus"});
			if (index > -1) this.injectBadges(e.instance, children, e.instance.props.user, "popout", e.instance.props.activity && e.instance.props.activity.type != BDFDB.DiscordConstants.ActivityTypes.CUSTOM_STATUS);
		}
	}

	injectBadges (instance, children, user, type, colored) {
		if (!BDFDB.ArrayUtils.is(children) || !user || user.bot) return;
		if (!BDFDB.ArrayUtils.is(this.requestedusers[user.id])) {
			this.requestedusers[user.id] = [instance];
			var queue = _ => {
				this.RequestQueue.queue.push(user.id);
				runqueue();
			};
			var runqueue = _ => {
				if (!this.RequestQueue.running) request(this.RequestQueue.queue.shift());
			};
			var request = id => {
				if (id) {
					this.RequestQueue.running = true;
					BDFDB.TimeUtils.clear(this.RequestQueue.timeout);
					this.RequestQueue.timeout = BDFDB.TimeUtils.timeout(_ => {
						this.RequestQueue.running = false;
						runqueue();
					}, 30000);
					BDFDB.LibraryModules.APIUtils.get(BDFDB.DiscordConstants.Endpoints.USER_PROFILE(id)).then(result => {
						let usercopy = Object.assign({}, result.body.user);
						if (result.body.premium_since) usercopy.flags += this.nitroflag;
						usercopy.premium_since = result.body.premium_since;
						if (result.body.premium_guild_since) usercopy.flags += this.boostflag;
						usercopy.premium_guild_since = result.body.premium_guild_since;
						this.loadedusers[id] = usercopy;
						for (let queredinstance of this.requestedusers[id]) BDFDB.ReactUtils.forceUpdate(queredinstance);
						this.RequestQueue.running = false;
						BDFDB.TimeUtils.timeout(_ => {runqueue();}, 1000);
					});
				}
			};
			queue();
		}
		else if (!this.loadedusers[user.id]) this.requestedusers[user.id].push(instance);
		else children.push(this.createBadges(user, type, colored));
	}

	createBadges (user, type, uncolored) {
		let badges = BDFDB.DataUtils.get(this, "badges");
		let indicators = BDFDB.DataUtils.get(this, "indicators");
		let settings = BDFDB.DataUtils.get(this, "settings");
		if (uncolored == undefined) uncolored = !settings.useColoredVersion;
		let badgewrapper = BDFDB.ReactUtils.elementToReact(BDFDB.DOMUtils.create(`<span class="BE-badges BE-badges-${type} ${uncolored ? BDFDB.disCN.userprofiletopsectionplaying : BDFDB.disCN.userprofiletopsectionnormal}" style="all: unset !important;"></span>`));
		badgewrapper.props.children = [];
		for (let flag in badges) if ((this.loadedusers[user.id].flags | flag) == this.loadedusers[user.id].flags && badges[flag]) {
			badgewrapper.props.children.push(this.createBadge(settings.showNitroDate ? this.getTimeString(user.id, flag) : null, type, flag, flag == this.boostflag ? BDFDB.LibraryModules.GuildBoostUtils.getUserLevel(this.loadedusers[user.id].premium_guild_since) : null));
		}
		let member = BDFDB.LibraryModules.MemberStore.getMember(BDFDB.LibraryModules.LastGuildStore.getGuildId(), user.id);
		if (indicators.CURRENT_GUILD_BOOST && member && member.premiumSince) {
			badgewrapper.props.children.push(this.createBadge(settings.showNitroDate ? this.getTimeString(user.id, "CURRENT_GUILD_BOOST") : null, type, "CURRENT_GUILD_BOOST"));
		}
		return badgewrapper.props.children.length ? badgewrapper : null;
	}
	
	createBadge (timestring, type, flag, rank) {
		let data = this.defaults.badges[flag] || this.defaults.indicators[flag];
		if (!data) return null;
		return BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
			className: BDFDB.DOMUtils.formatClassName(`BE-badge`, `BE-badge-${type}`, ["list", "chat"].includes(type) ? `BE-badge-mini` : null, data.id ? `BE-badge-${data.id}` : null, data.icon ? this.BadgeClasses[data.icon + (rank || "")] : null, data.px ? `BE-size-${data.px}` : null),
			text: timestring || (data.name + (data.suffix ? ` ${data.suffix}` : "") + (rank ? ` Level ${rank}` : "")),
			tooltipConfig: {
				style: "white-space: nowrap; max-width: unset;"
			},
			children: data.inner ? BDFDB.ReactUtils.elementToReact(BDFDB.DOMUtils.create(data.inner)) : null
		})
	}
	
	getTimeString (id, flag) {
		let member = BDFDB.LibraryModules.MemberStore.getMember(BDFDB.LibraryModules.LastGuildStore.getGuildId(), id);
		if (flag == this.nitroflag) return BDFDB.LanguageUtils.LanguageStringsFormat("PREMIUM_BADGE_TOOLTIP", new Date(this.loadedusers[id].premium_since));
		else if (flag == this.boostflag) return BDFDB.LanguageUtils.LanguageStringsFormat("PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP", new Date(this.loadedusers[id].premium_guild_since));
		else if (member && flag == "CURRENT_GUILD_BOOST") return BDFDB.LanguageUtils.LanguageStringsFormat("PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP", new Date(member.premiumSince));
		return null;
	}
	
	createSettingsBadges (flag) {
		let data = this.defaults.badges[flag] || this.defaults.indicators[flag];
		if (!data) return null;
		let eles = null;
		let colorbadgewrapper = BDFDB.ReactUtils.elementToReact(BDFDB.DOMUtils.create(`<span class="BE-badges BE-badges-settings ${BDFDB.disCN.userprofiletopsectionnormal}" style="all: unset !important;"></span>`));
		let uncolorbadgewrapper = BDFDB.ReactUtils.elementToReact(BDFDB.DOMUtils.create(`<span class="BE-badges BE-badges-settings ${BDFDB.disCN.userprofiletopsectionplaying}" style="all: unset !important;"></span>`));
		if (Array.isArray(data.types)) {
			for (let rank of data.types) {
				let badge = this.createBadge(null, "settings", flag, rank);
				colorbadgewrapper.props.children.push(badge);
				uncolorbadgewrapper.props.children.push(badge);
			}
			eles = BDFDB.ReactUtils.createElement("div", {children: [colorbadgewrapper, BDFDB.ReactUtils.createElement("br"), uncolorbadgewrapper]});
		}
		else {
			let badge = this.createBadge(null, "settings", flag);
			colorbadgewrapper.props.children.push(badge);
			uncolorbadgewrapper.props.children.push(badge);
			eles = [colorbadgewrapper, uncolorbadgewrapper];
		}
		return eles;
	}
}
