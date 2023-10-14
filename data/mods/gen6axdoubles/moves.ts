export const Moves: {[k: string]: ModdedMoveData} = {
	//Custom-Moves//
	scorchingswarm: {
		num: -1,
		accuracy: 90,
		basePower: 110,
		category: "Special",
		name: "Scorching Swarm",
		desc: "20% Chance to burn the target.",
		pp: 5,
		
		priority: 0,
		noSketch: false,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		onPrepareHit: function(target, source) {	
			this.attrLastMove('[still]');
			this.add('-anim', source, "Attack Order", target);
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
		gen: 6,
	},
	groundpound: {
		num: -2,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Ground Pound",
		desc: "20% Chance to make the target flinch.",
		pp: 10,
		
		priority: 0,
		noSketch: false,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		onPrepareHit: function(target, source) {	
			this.attrLastMove('[still]');
			this.add('-anim', source, "Stomp", target);
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		gen: 6,

	},
	tussle: {
		num: -3,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Tussle",
		desc: "10% Chance to paralyze the target.",
		pp: 20,
		
		priority: 0,
		noSketch: false,
		flags: {contact: 1, protect: 1, mirror: 1 },
		secondary: {
			chance: 10,
			status: 'par',
		},
		onPrepareHit: function(target, source) {	
			this.attrLastMove('[still]');
			this.add('-anim', source, "Play Rough", target);
		},
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		gen: 6,

	},
	fatesflourish: {
		num: -4,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Fates Flourish",
		desc: "Crit Stage increased by 1.",
		pp: 5,
		
		priority: 0,
		noSketch: false,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 1,
		secondary: null,
		onPrepareHit: function(target, source) {	
			this.attrLastMove('[still]');
			this.add('-anim', source, "Spacial Rend", target);
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		gen: 6,

	},
	breakingswipe: {
		num: 784,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Breaking Swipe",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		gen: 6,
	},
	spiritbreak: {
		num: 789,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Spirit Break",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		gen: 6,
	},
	dualwingbeat: {
		inherit: true,
		num: 814,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Dual Wingbeat",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Flying",
		maxMove: {basePower: 130},
		gen: 6,
	},
	trailblaze: {
		num: 885,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Trailblaze",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		gen: 6,
	},
	tropkick: {
		num: 688,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Trop Kick",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cute",
		gen: 6,
	},
	headlongrush: {
		num: 838,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Headlong Rush",
		desc: "Lowers the user's Attack and Defense by 1 stage.",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				atk: -1,
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		gen: 6,
	},
	icehammer: {
		num: 665,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		name: "Ice Hammer",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Tough",
		gen: 6,
	},
	esperwing: {
		num: 840,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Esper Wing",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Psychic",
		gen: 6,
	},
	accelerock: {
		num: 709,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Accelerock",
		pp: 20,
		
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
		gen: 6,
	},
	steelbeam: {
		num: 796,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Steel Beam",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Steel Beam'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		gen: 6,
	},
	aquastep: {
		num: 872,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Aqua Step",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, dance: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
		gen: 6,
	},
	chillingwater: {
		num: 886,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Chilling Water",
		pp: 20,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,
	},
	wavecrash: {
		num: 834,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Wave Crash",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Water",
		gen: 6,
	},
	//Offensive Moves//
	/////Bug-Type//////
	fellstinger: {
		num: 565,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Fell Stinger",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({atk: 3}, pokemon, pokemon, move);
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		gen: 6,

	},
	furycutter: {
		num: 210,
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles['furycutter'] || move.hit === 1) {
				pokemon.addVolatile('furycutter');
			}
			const bp = this.clampIntRange(move.basePower * pokemon.volatiles['furycutter'].multiplier, 1, 160);
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Physical",
		name: "Fury Cutter",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		condition: {
			duration: 2,
			onStart() {
				this.effectState.multiplier = 1;
			},
			onRestart() {
				if (this.effectState.multiplier < 4) {
					this.effectState.multiplier <<= 1;
				}
				this.effectState.duration = 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		gen: 6,

	},
	megahorn: {
		num: 224,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Megahorn",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		gen: 6,

	},
	pinmissile: {
		num: 42,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Pin Missile",
		pp: 20,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cool",
		gen: 6,

	},
	twineedle: {
		num: 41,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		name: "Twineedle",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Bug",
		maxMove: {basePower: 100},
		contestType: "Cool",
		gen: 6,

	},
	uturn: {
		num: 369,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "U-turn",
		pp: 1.25,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cute",
		gen: 6,

	},
	xscissor: {
		num: 404,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "X-Scissor",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: null,
		critRatio: 1,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
		gen: 6,

	},
	////Dark-Type////
	nightdaze: {
		num: 539,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Night Daze",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Dark",
		contestType: "Cool",
		gen: 6,

	},
	nightslash: {
		num: 400,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Night Slash",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
		gen: 6,

	},
	snarl: {
		num: 555,
		accuracy: 100,
		basePower: 55,
		category: "Special",
		name: "Snarl",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Tough",
		gen: 6,

	},
	////Dragon-Type////
	dracometeor: {
		num: 434,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Draco Meteor",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
		gen: 6,

	},
	dragonrush: {
		num: 407,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Dragon Rush",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
		gen: 6,

	},
	dragontail: {
		num: 525,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Dragon Tail",
		pp: 1.875,
		
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1, noassist: 1, failcopycat: 1},
		forceSwitch: true,
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
		gen: 6,

	},
	dualchop: {
		num: 530,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Dual Chop",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {basePower: 130},
		contestType: "Tough",
		gen: 6,

	},
	roaroftime: {
		num: 459,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		name: "Roar of Time",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
		gen: 6,

	},
	spacialrend: {
		num: 460,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Spacial Rend",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
		gen: 6,

	},
	////Electric-Type////
	chargebeam: {
		num: 451,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Charge Beam",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
		gen: 6,

	},
	electroweb: {
		num: 527,
		accuracy: 100,
		basePower: 55,
		category: "Special",
		name: "Electroweb",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Electric",
		contestType: "Beautiful",
		gen: 6,

	},
	nuzzle: {
		num: 609,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Nuzzle",
		pp: 1.875,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cute",
		gen: 6,

	},
	paraboliccharge: {
		num: 570,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Parabolic Charge",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		contestType: "Clever",
		gen: 6,

	},
	thunderfang: {
		num: 422,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Thunder Fang",
		pp: 9.375,
		
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'par',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		gen: 6,

	},
	voltswitch: {
		num: 521,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Volt Switch",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		gen: 6,

	},
	zapcannon: {
		num: 192,
		accuracy: 75,
		basePower: 85,
		category: "Special",
		name: "Zap Cannon",
		pp: 5,
		
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
		gen: 6,

	},
	////Fairy-Type////
	disarmingvoice: {
		num: 574,
		accuracy: true,
		basePower: 60,
		category: "Special",
		name: "Disarming Voice",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		contestType: "Cute",
		gen: 6,

	},
	drainingkiss: {
		num: 577,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Draining Kiss",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
		gen: 6,

	},
	lightofruin: {
		num: 617,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Light of Ruin",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: -2,
				},
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Beautiful",
		gen: 6,

	},
	playrough: {
		num: 583,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Play Rough",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		contestType: "Cute",
		gen: 6,

	},
	////Fighting-Type////
	armthrust: {
		num: 292,
		accuracy: 100,
		basePower: 22,
		category: "Physical",
		name: "Arm Thrust",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		gen: 6,

	},
	circlethrow: {
		num: 509,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Circle Throw",
		pp: 1.875,
		
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1, noassist: 1, failcopycat: 1},
		forceSwitch: true,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	crosschop: {
		num: 238,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Cross Chop",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	doublekick: {
		num: 24,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Double Kick",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		maxMove: {basePower: 80},
		contestType: "Cool",
		gen: 6,

	},
	flyingpress: {
		num: 560,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Flying Press",
		pp: 10,
		
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Flying', type);
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Fighting",
		zMove: {basePower: 170},
		contestType: "Tough",
		gen: 6,

	},
	focusblast: {
		num: 411,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		name: "Focus Blast",
		pp: 5,
		
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	hammerarm: {
		num: 359,
		accuracy: 100,
		basePower: 110,
		category: "Physical",
		name: "Hammer Arm",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		gen: 6,

	},
	poweruppunch: {
		num: 612,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Power-Up Punch",
		pp: 1.25,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		gen: 6,

	},
	rocksmash: {
		num: 249,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Rock Smash",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		contestType: "Tough",
		gen: 6,

	},
	rollingkick: {
		num: 27,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Rolling Kick",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	skyuppercut: {
		num: 327,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Sky Uppercut",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	submission: {
		num: 66,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Submission",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	triplekick: {
		num: 167,
		accuracy: 100,
		basePower: 17,
		basePowerCallback(pokemon, target, move) {
			return 10 * move.hit;
		},
		category: "Physical",
		name: "Triple Kick",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	vitalthrow: {
		num: 233,
		accuracy: true,
		basePower: 70,
		category: "Physical",
		name: "Vital Throw",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
		gen: 6,

	},
	////Fire////
	blastburn: {
		num: 307,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		name: "Blast Burn",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	blazekick: {
		num: 299,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Blaze Kick",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		gen: 6,

	},
	fireblast: {
		num: 126,
		accuracy: 90,
		basePower: 110,
		category: "Special",
		name: "Fire Blast",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	firefang: {
		num: 424,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Fire Fang",
		pp: 9.375,
		
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'brn',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Fire",
		contestType: "Cool",
		gen: 6,

	},
	firespin: {
		num: 83,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Fire Spin",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	flamewheel: {
		num: 172,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Flame Wheel",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	heatwave: {
		num: 257,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Heat Wave",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "allAdjacentFoes",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	inferno: {
		num: 517,
		accuracy: 75,
		basePower: 90,
		category: "Special",
		name: "Inferno",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	overheat: {
		num: 315,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Overheat",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	sacredfire: {
		num: 221,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Sacred Fire",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
		gen: 6,

	},
	vcreate: {
		num: 557,
		accuracy: 100,
		basePower: 180,
		category: "Physical",
		name: "V-create",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spe: -1,
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {basePower: 220},
		contestType: "Cool",
		gen: 6,

	},
	////Flying-Type////
	aeroblast: {
		num: 177,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Aeroblast",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		critRatio: 2,
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		gen: 6,

	},
	aircutter: {
		num: 314,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Air Cutter",
		pp: 25,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1, wind: 1},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Cool",
		gen: 6,

	},
	airslash: {
		num: 403,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Air Slash",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, slicing: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
		gen: 6,

	},
	bounce: {
		num: 340,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Bounce",
		pp: 5,
		
		priority: 0,
		flags: {
			contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1,
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
		gen: 6,

	},
	chatter: {
		num: 448,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Chatter",
		pp: 1.875,
		
		priority: 0,
		flags: {
			protect: 1, mirror: 1, sound: 1, distance: 1, bypasssub: 1, nosleeptalk: 1, noassist: 1,
			failcopycat: 1, failinstruct: 1, failmimic: 1,
		},
		noSketch: true,
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
		gen: 6,

	},
	drillpeck: {
		num: 65,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Drill Peck",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		gen: 6,

	},
	fly: {
		num: 19,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Fly",
		pp: 9.375,
		
		priority: 0,
		flags: {
			contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1,
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
		gen: 6,

	},
	peck: {
		num: 64,
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		name: "Peck",
		pp: 35,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
		gen: 6,

	},
	skyattack: {
		num: 143,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Sky Attack",
		pp: 5,
		
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, distance: 1, nosleeptalk: 1, failinstruct: 1},
		critRatio: 2,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cool",
		gen: 6,

	},
	skydrop: {
		num: 507,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Sky Drop",
		pp: 10,
		
		priority: 0,
		flags: {
			contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1,
		},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				delete move.flags['contact'];
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				if (target === this.effectState.target) {
					this.add('-end', target, 'Sky Drop', '[interrupt]');
				}
			}
		},
		onTry(source, target) {
			return !target.fainted;
		},
		onTryHit(target, source, move) {
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.isAlly(source)) {
					return false;
				}
				if (target.getWeight() >= 2000) {
					this.add('-fail', target, 'move: Sky Drop', '[heavy]');
					return null;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			if (target.hp) this.add('-end', target, 'Sky Drop');
		},
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Sky drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows'].includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					this.debug('BP doubled on midair target');
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Tough",
		gen: 6,

	},
	////Ghost-Type////
	astonish: {
		num: 310,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Astonish",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
		gen: 6,

	},
	lick: {
		num: 122,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Lick",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ghost",
		contestType: "Cute",
		gen: 6,

	},
	phantomforce: {
		num: 566,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Phantom Force",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1},
		breaksProtect: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability: false,
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		gen: 6,

	},
	shadowclaw: {
		num: 421,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Shadow Claw",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		gen: 6,

	},
	shadowpunch: {
		num: 325,
		accuracy: true,
		basePower: 80,
		category: "Physical",
		name: "Shadow Punch",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
		gen: 6,

	},
	////Grass-Type////
	absorb: {
		num: 71,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Absorb",
		pp: 25,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		gen: 6,

	},
	frenzyplant: {
		num: 338,
		accuracy: 100,
		basePower: 170,
		category: "Special",
		name: "Frenzy Plant",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1, nonsky: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		gen: 6,

	},
	gigadrain: {
		num: 202,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Giga Drain",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
		gen: 6,

	},
	hornleech: {
		num: 532,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Horn Leech",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		gen: 6,

	},
	leafstorm: {
		num: 437,
		accuracy: 100,
		basePower: 130,
		category: "Special",
		name: "Leaf Storm",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
		gen: 6,

	},
	leaftornado: {
		num: 536,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Leaf Tornado",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		gen: 6,

	},
	megadrain: {
		num: 72,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Mega Drain",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {basePower: 120},
		contestType: "Clever",
		gen: 6,

	},
	petalblizzard: {
		num: 572,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Petal Blizzard",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Grass",
		contestType: "Beautiful",
		gen: 6,

	},
	powerwhip: {
		num: 438,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Power Whip",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Tough",
		gen: 6,

	},
	razorleaf: {
		num: 75,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Razor Leaf",
		pp: 25,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		contestType: "Cool",
		gen: 6,

	},
	////Ground-Type////
	boneclub: {
		num: 125,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Bone Club",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		gen: 6,

	},
	bonerush: {
		num: 198,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Bone Rush",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
		gen: 6,

	},
	bonemerang: {
		num: 155,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Bonemerang",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		maxMove: {basePower: 130},
		contestType: "Tough",
		gen: 6,

	},
	dig: {
		num: 91,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Dig",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onInvulnerability(target, source, move) {
				if (['earthquake', 'magnitude'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'earthquake' || move.id === 'magnitude') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		gen: 6,

	},
	drillrun: {
		num: 529,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Drill Run",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		gen: 6,

	},
	fissure: {
		num: 90,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Fissure",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1, nonsky: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		gen: 6,

	},
	mudbomb: {
		num: 426,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Mud Bomb",
		pp: 10,
		
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
		gen: 6,

	},
	mudshot: {
		num: 341,
		accuracy: 100,
		basePower: 55,
		category: "Special",
		name: "Mud Shot",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Tough",
		gen: 6,

	},
	mudslap: {
		num: 189,
		accuracy: 100,
		basePower: 35,
		category: "Special",
		name: "Mud-Slap",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		contestType: "Cute",
		gen: 6,

	},
	sandtomb: {
		num: 328,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Sand Tomb",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
		gen: 6,

	},
	////Ice-Type////
	freezedry: {
		num: 573,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Freeze-Dry",
		pp: 20,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		gen: 6,

	},
	freezeshock: {
		num: 553,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Freeze Shock",
		pp: 5,
		
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		gen: 6,

	},
	frostbreath: {
		num: 524,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Frost Breath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		gen: 6,

	},
	glaciate: {
		num: 549,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Glaciate",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
		gen: 6,

	},
	iceburn: {
		num: 554,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Ice Burn",
		pp: 5,
		
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		gen: 6,

	},
	icefang: {
		num: 423,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Ice Fang",
		pp: 9.375,
		
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondaries: [
			{
				chance: 10,
				status: 'frz',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Ice",
		contestType: "Cool",
		gen: 6,

	},
	iciclecrash: {
		num: 556,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Icicle Crash",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		gen: 6,

	},
	icywind: {
		num: 196,
		accuracy: 100,
		basePower: 55,
		category: "Special",
		name: "Icy Wind",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		contestType: "Beautiful",
		gen: 6,

	},
	sheercold: {
		num: 329,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		name: "Sheer Cold",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		target: "normal",
		type: "Ice",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Beautiful",
		gen: 6,

	},
	////Normal-Type////
	barrage: {
		num: 140,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		name: "Barrage",
		pp: 20,
		
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cute",
		gen: 6,

	},
	bind: {
		num: 20,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Bind",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	cometpunch: {
		num: 4,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Comet Punch",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 5,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		multihit: 2,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	constrict: {
		num: 132,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Constrict",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	crushclaw: {
		num: 306,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Crush Claw",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		gen: 6,

	},
	cut: {
		num: 15,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Cut",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
		gen: 6,

	},
	dizzypunch: {
		num: 146,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Dizzy Punch",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		gen: 6,

	},
	doublehit: {
		num: 458,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Double Hit",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 140},
		maxMove: {basePower: 120},
		contestType: "Cool",
		gen: 6,

	},
	doubleslap: {
		num: 3,
		accuracy: 100,
		basePower: 22,
		category: "Physical",
		name: "Double Slap",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		gen: 6,

	},
	eggbomb: {
		num: 121,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Egg Bomb",
		pp: 10,
		
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cute",
		gen: 6,

	},
	fakeout: {
		num: 252,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Fake Out",
		pp: 1.25,
		
		priority: 3,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Fake Out only works on your first turn out.");
				return false;
			}
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		gen: 6,

	},
	frustration: {
		num: 218,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor(((255 - pokemon.happiness) * 10) / 25) || 1;
		},
		category: "Physical",
		name: "Frustration",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
		gen: 6,

	},
	furyattack: {
		num: 31,
		accuracy: 100,
		basePower: 22,
		category: "Physical",
		name: "Fury Attack",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		gen: 6,

	},
	furyswipes: {
		num: 154,
		accuracy: 100,
		basePower: 22,
		category: "Physical",
		name: "Fury Swipes",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		maxMove: {basePower: 100},
		contestType: "Tough",
		gen: 6,

	},
	gigaimpact: {
		num: 416,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Giga Impact",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	guillotine: {
		num: 12,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Guillotine",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1 ,contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
		gen: 6,

	},
	horndrill: {
		num: 32,
		accuracy: 100,
		basePower: 170,
		category: "Physical",
		name: "Horn Drill",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1 ,contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Cool",
		gen: 6,

	},
	hyperbeam: {
		num: 63,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		name: "Hyper Beam",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		gen: 6,

	},
	hyperfang: {
		num: 158,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Hyper Fang",
		pp: 9.375,
		
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		gen: 6,

	},
	megakick: {
		num: 25,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Mega Kick",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		gen: 6,

	},
	megapunch: {
		num: 5,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Mega Punch",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	payday: {
		num: 6,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Pay Day",
		pp: 20,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Clever",
		gen: 6,

	},
	rage: {
		num: 99,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Rage",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'rage',
		},
		condition: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Rage');
			},
			onHit(target, source, move) {
				if (target !== source && move.category !== 'Status') {
					this.boost({atk: 1});
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Rage before attack');
				pokemon.removeVolatile('rage');
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	rapidspin: {
		num: 229,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Rapid Spin",
		pp: 2.5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		gen: 6,

	},
	razorwind: {
		num: 13,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Razor Wind",
		pp: 10,
		
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Cool",
		gen: 6,

	},
	return: {
		num: 216,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Physical",
		name: "Return",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
		gen: 6,

	},
	rockclimb: {
		num: 431,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Rock Climb",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		gen: 6,

	},
	slam: {
		num: 21,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Slam",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	slash: {
		num: 163,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Slash",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
		gen: 6,

	},
	snore: {
		num: 173,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Snore",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
		sleepUsable: true,
		onTry(source) {
			return source.status === 'slp' || source.hasAbility('comatose');
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cute",
		gen: 6,

	},
	spikecannon: {
		num: 131,
		accuracy: 100,
		basePower: 22,
		category: "Physical",
		name: "Spike Cannon",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Water",
		maxMove: {basePower: 120},
		contestType: "Cool",
		gen: 6,

	},
	strength: {
		num: 70,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Strength",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spd: -1,
				def: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		gen: 6,

	},
	superfang: {
		num: 162,
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
		},
		category: "Physical",
		name: "Super Fang",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	tackle: {
		num: 33,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Tackle",
		pp: 35,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	tailslap: {
		num: 541,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Tail Slap",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Cute",
		gen: 6,

	},
	takedown: {
		num: 36,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Take Down",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	triattack: {
		num: 161,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Tri Attack",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
		gen: 6,

	},
	wrap: {
		num: 35,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Wrap",
		pp: 20,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Tough",
		gen: 6,

	},
	////Poison-Type////
	belch: {
		num: 562,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Belch",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, failmefirst: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1, failmimic: 1},
		onDisableMove(pokemon) {
			if (!pokemon.ateBerry) pokemon.disableMove('belch');
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		gen: 6,

	},
	crosspoison: {
		num: 440,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Cross Poison",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		critRatio: 2,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
		gen: 6,

	},
	gunkshot: {
		num: 441,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		name: "Gunk Shot",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		gen: 6,

	},
	poisonsting: {
		num: 40,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Poison Sting",
		pp: 35,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		gen: 6,

	},
	poisontail: {
		num: 342,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Poison Tail",
		pp: 25,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
		gen: 6,

	},
	sludge: {
		num: 124,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Sludge",
		pp: 20,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		gen: 6,

	},
	smog: {
		num: 123,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		name: "Smog",
		pp: 20,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
		gen: 6,

	},
	////Psychic-Type////
	dreameater: {
		num: 138,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Dream Eater",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		onTryImmunity(target) {
			return target.status === 'slp' || target.hasAbility('comatose');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		gen: 6,

	},
	heartstamp: {
		num: 531,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Heart Stamp",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cute",
		gen: 6,

	},
	hyperspacehole: {
		num: 593,
		accuracy: true,
		basePower: 95,
		category: "Special",
		name: "Hyperspace Hole",
		pp: 5,
		
		priority: 0,
		flags: {mirror: 1, bypasssub: 1},
		breaksProtect: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		gen: 6,

	},
	psychoboost: {
		num: 354,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Psycho Boost",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		gen: 6,

	},
	psychocut: {
		num: 427,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Psycho Cut",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, slicing: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		gen: 6,

	},
	storedpower: {
		num: 500,
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon, target, move) {
			const bp = move.basePower + 20 * pokemon.positiveBoosts();
			this.debug('BP: ' + bp);
			return bp;
		},
		category: "Special",
		name: "Stored Power",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Clever",
		gen: 6,

	},
	zenheadbutt: {
		num: 428,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Zen Headbutt",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
		gen: 6,

	},
	////Rock-Type////
	ancientpower: {
		num: 246,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Ancient Power",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		gen: 6,

	},
	diamondstorm: {
		num: 591,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Diamond Storm",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				def: 2,
			},
		},
		secondary: {
			// Sheer Force negates the self even though it is not secondary
		},
		target: "allAdjacentFoes",
		type: "Rock",
		contestType: "Beautiful",
		gen: 6,

	},
	headsmash: {
		num: 457,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		name: "Head Smash",
		pp: 5,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		gen: 6,

	},
	powergem: {
		num: 408,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Power Gem",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary:{
			chance: 10,
			boosts:{
				spd: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
		gen: 6,

	},
	rockblast: {
		num: 350,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Rock Blast",
		pp: 10,
		
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Rock",
		zMove: {basePower: 140},
		maxMove: {basePower: 130},
		contestType: "Tough",
		gen: 6,

	},
	rockthrow: {
		num: 88,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Rock Throw",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		gen: 6,

	},
	rocktomb: {
		num: 317,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Rock Tomb",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Clever",
		gen: 6,

	},
	rockwrecker: {
		num: 439,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Rock Wrecker",
		pp: 5,
		
		priority: 0,
		flags: {bullet: 1, recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		gen: 6,

	},
	stoneedge: {
		num: 444,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Stone Edge",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
		gen: 6,

	},
	////Steel-Type////
	geargrind: {
		num: 544,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Gear Grind",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 180},
		maxMove: {basePower: 130},
		contestType: "Clever",
		gen: 6,

	},
	irontail: {
		num: 231,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Iron Tail",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		gen: 6,

	},
	metalclaw: {
		num: 232,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Metal Claw",
		pp: 35,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		gen: 6,

	},
	meteormash: {
		num: 309,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Meteor Mash",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		gen: 6,

	},
	mirrorshot: {
		num: 429,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Mirror Shot",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
		gen: 6,

	},
	steelwing: {
		num: 211,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Steel Wing",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
		gen: 6,

	},
	////Water-Type////
	aquatail: {
		num: 401,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Aqua Tail",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,

	},
	bubblebeam: {
		num: 61,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Bubble Beam",
		pp: 20,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,

	},
	clamp: {
		num: 128,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		name: "Clamp",
		pp: 9.375,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Tough",
		gen: 6,

	},
	dive: {
		num: 291,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Dive",
		pp: 10,
		
		priority: 0,
		flags: {
			contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1, allyanim: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1,
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			if (attacker.hasAbility('gulpmissile') && attacker.species.name === 'Cramorant' && !attacker.transformed) {
				const forme = attacker.hp <= attacker.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
				attacker.formeChange(forme, move);
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onInvulnerability(target, source, move) {
				if (['surf', 'whirlpool'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'surf' || move.id === 'whirlpool') {
					return this.chainModify(2);
				}
			},
		},
		secondary:{
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,

	},
	hydrocannon: {
		num: 308,
		accuracy: 100,
		basePower: 160,
		category: "Special",
		name: "Hydro Cannon",
		pp: 5,
		
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,

	},
	hydropump: {
		num: 56,
		accuracy: 90,
		basePower: 110,
		category: "Special",
		name: "Hydro Pump",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,

	},
	muddywater: {
		num: 330,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Muddy Water",
		pp: 10,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Tough",
		gen: 6,

	},
	octazooka: {
		num: 190,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Octazooka",
		pp: 5,
		
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
				boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
		gen: 6,

	},
	razorshell: {
		num: 534,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Razor Shell",
		pp: 10,
		
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
		secondary: {
				boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Cool",
		gen: 6,

	},
	steameruption: {
		num: 592,
		accuracy: 100,
		basePower: 110,
		category: "Special",
		name: "Steam Eruption",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,

	},
	watershuriken: {
		num: 594,
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.species.name === 'Greninja-Ash' && pokemon.hasAbility('battlebond') &&
				!pokemon.transformed) {
				return move.basePower + 5;
			}
			return move.basePower;
		},
		category: "Special",
		name: "Water Shuriken",
		pp: 10,
		
		priority: 1,
		flags: {protect: 1, mirror: 1},
		multihit: 3,
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
		gen: 6,

	},
	whirlpool: {
		num: 250,
		accuracy: 100,
		basePower: 20,
		category: "Special",
		name: "Whirlpool",
		pp: 9.375,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
		gen: 6,

	},
	////Status-Moves////
	////Bug-Type////
	defendorder: {
		num: 455,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defend Order",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	healorder: {
		num: 456,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Order",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	quiverdance: {
		num: 483,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quiver Dance",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	stickyweb: {
		num: 564,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sticky Web",
		pp: 1.25,
		
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'stickyweb',
		condition: {
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, this.effectState.source, this.dex.getActiveMove('stickyweb'));
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Bug",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
		gen: 6,

	},
	stringshot: {
		num: 81,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "String Shot",
		pp: 7.5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Bug",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
		gen: 6,

	},
	tailglow: {
		num: 294,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tail Glow",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 3,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	////Dark-Type////
	darkvoid: {
		num: 464,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		name: "Dark Void",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		onTry(source, target, move) {
			if (source.species.name === 'Darkrai' || move.hasBounced) {
				return;
			}
			this.add('-fail', source, 'move: Dark Void');
			this.hint("Only a Pokemon whose form is Darkrai can use this move.");
			return null;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	faketears: {
		num: 313,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Fake Tears",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
		gen: 6,

	},
	flatter: {
		num: 260,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Flatter",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		volatileStatus: 'confusion',
		boosts: {
			spa: 1,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
		gen: 6,

	},
	honeclaws: {
		num: 468,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hone Claws",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
		gen: 6,

	},
	nastyplot: {
		num: 417,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Nasty Plot",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 2,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	partingshot: {
		num: 575,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Parting Shot",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		onHit(target, source, move) {
			const success = this.boost({atk: -1, spa: -1}, target, source);
			if (!success && !target.hasAbility('mirrorarmor')) {
				delete move.selfSwitch;
			}
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {effect: 'healreplacement'},
		contestType: "Cool",
		gen: 6,

	},
	taunt: {
		num: 269,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Taunt",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'taunt',
		condition: {
			duration: 3,
			onStart(target) {
				if (target.activeTurns && !this.queue.willMove(target)) {
					this.effectState.duration++;
				}
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					const move = this.dex.moves.get(moveSlot.id);
					if (move.category === 'Status' && move.id !== 'mefirst') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && !move.isMax && move.category === 'Status' && move.id !== 'mefirst') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
		gen: 6,

	},
	////Dragon-Type////
	dragondance: {
		num: 349,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Dragon Dance",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Dragon",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
		gen: 6,

	},
	////Electric-Type////
	charge: {
		num: 268,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Charge",
		pp: 2.5,
		
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'charge',
		condition: {
			onStart(pokemon, source, effect) {
				if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
					this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
				} else {
					this.add('-start', pokemon, 'Charge');
				}
			},
			onRestart(pokemon, source, effect) {
				if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
					this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
				} else {
					this.add('-start', pokemon, 'Charge');
				}
			},
			onBasePowerPriority: 9,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
			onMoveAborted(pokemon, target, move) {
				if (move.type === 'Electric' && move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onAfterMove(pokemon, target, move) {
				if (move.type === 'Electric' && move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Charge', '[silent]');
			},
		},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
		gen: 6,

	},
	eerieimpulse: {
		num: 598,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Eerie Impulse",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
		gen: 6,

	},
	electricterrain: {
		num: 604,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Electric Terrain",
		pp: 1.25,
		
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'electricterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
					if (effect.id === 'yawn' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Electric Terrain');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Electric Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('electric terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Electric Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
		gen: 6,

	},
	magnetrise: {
		num: 393,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnet Rise",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1, gravity: 1},
		volatileStatus: 'magnetrise',
		onTry(source, target, move) {
			if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;

			// Additional Gravity check for Z-move variant
			if (this.field.getPseudoWeather('Gravity')) {
				this.add('cant', source, 'move: Gravity', move);
				return null;
			}
		},
		condition: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'Magnet Rise');
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onResidualOrder: 18,
			onEnd(target) {
				this.add('-end', target, 'Magnet Rise');
			},
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
		gen: 6,

	},
	thunderwave: {
		num: 86,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Thunder Wave",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		ignoreImmunity: false,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Cool",
		gen: 6,

	},
	////Fairy-Type////
	aromaticmist: {
		num: 597,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aromatic Mist",
		pp: 2.5,
		
		priority: 0,
		flags: {bypasssub: 1},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Fairy",
		zMove: {boost: {spd: 2}},
		contestType: "Beautiful",
		gen: 6,

	},
	babydolleyes: {
		num: 608,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Baby-Doll Eyes",
		pp: 7.5,
		
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
		gen: 6,

	},
	charm: {
		num: 204,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Charm",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
		gen: 6,

	},
	geomancy: {
		num: 601,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Geomancy",
		pp: 1,
		
		priority: 0,
		flags: {charge: 1, nonsky: 1, nosleeptalk: 1, failinstruct: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		boosts: {
			spa: 2,
			spd: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	flowershield: {
		num: 579,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Flower Shield",
		pp: 2.5,
		
		priority: 0,
		flags: {distance: 1},
		onHitField(t, source, move) {
			const targets: Pokemon[] = [];
			for (const pokemon of this.getAllActive()) {
				if (
					pokemon.hasType('Grass') &&
					(!pokemon.volatiles['maxguard'] ||
					  this.runEvent('TryHit', pokemon, source, move))
				  ) {
					// This move affects every Grass-type Pokemon in play.
					targets.push(pokemon);
				  }
			}
			let success = false;
			for (const target of targets) {
				success = this.boost({def: 1}, target, source, move) || success;
			}
			return success;
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	mistyterrain: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Misty Terrain",
		pp: 1.25,
		
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'mistyterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (effect && ((effect as Move).status || effect.id === 'yawn')) {
					this.add('-activate', target, 'move: Misty Terrain');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Misty Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Dragon' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('misty terrain weaken');
					return this.chainModify(0.5);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Misty Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Misty Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'Misty Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	moonlight: {
		num: 236,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Moonlight",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
	},
	sweetkiss: {
		num: 186,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sweet Kiss",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
		gen: 6,

	},
	////Fighting-Type////
	bulkup: {
		num: 339,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Bulk Up",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
		gen: 6,

	},
	detect: {
		num: 197,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Detect",
		pp: 1.25,
		
		priority: 4,
		flags: {noassist: 1, failcopycat: 1},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {boost: {evasion: 1}},
		contestType: "Cool",
		gen: 6,

	},
	matblock: {
		num: 561,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mat Block",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1, nonsky: 1, noassist: 1, failcopycat: 1},
		stallingMove: true,
		sideCondition: 'matblock',
		onTry(source) {
			if (source.activeMoveActions > 1) {
				this.hint("Mat Block only works on your first turn out.");
				return false;
			}
			return !!this.queue.willAct();
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Mat Block');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move && (move.target === 'self' || move.category === 'Status')) return;
				this.add('-activate', target, 'move: Mat Block', move.name);
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
		gen: 6,

	},
	quickguard: {
		num: 501,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Quick Guard",
		pp: 1.25,
		
		priority: 3,
		flags: {snatch: 1},
		sideCondition: 'quickguard',
		onTry() {
			return !!this.queue.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Quick Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, move) {
				// Quick Guard blocks moves with positive priority, even those given increased priority by Prankster or Gale Wings.
				// (e.g. it blocks 0 priority moves boosted by Prankster or Gale Wings; Quick Claw/Custap Berry do not count)
				if (move.priority <= 0.1) return;
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Quick Guard');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
		gen: 6,

	},
	////Fire-Type////
	sunnyday: {
		num: 241,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sunny Day",
		pp: 1.25,
		
		priority: 0,
		flags: {},
		weather: 'sunnyday',
		secondary: null,
		target: "all",
		type: "Fire",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	willowisp: {
		num: 261,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Will-O-Wisp",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'brn',
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	////Flying-Type////
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 7.5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.conditions.get(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
		gen: 6,

	},
	featherdance: {
		num: 297,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Feather Dance",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1, dance: 1},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	roost: {
		num: 355,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roost",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		self: {
			volatileStatus: 'roost',
		},
		condition: {
			duration: 1,
			onResidualOrder: 25,
			onStart(target) {
				if (!target.terastallized) {
					this.add('-singleturn', target, 'move: Roost');
				} else if (target.terastallized === "Flying") {
					this.add('-hint', "If a Flying Terastallized Pokemon uses Roost, it remains Flying-type.");
				}
			},
			onTypePriority: -1,
			onType(types, pokemon) {
				this.effectState.typeWas = types;
				return types.filter(type => type !== 'Flying');
			},
		},
		secondary: null,
		target: "self",
		type: "Flying",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	tailwind: {
		num: 366,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tailwind",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1, wind: 1},
		sideCondition: 'tailwind',
		condition: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Tailwind');
					return 6;
				}
				return 4;
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'move: Tailwind', '[persistent]');
				} else {
					this.add('-sidestart', side, 'move: Tailwind');
				}
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 5,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Tailwind');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Flying",
		zMove: {effect: 'crit2'},
		contestType: "Cool",
		gen: 6,

	},
	////Ghost-Type////
	confuseray: {
		num: 109,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Confuse Ray",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
		gen: 6,

	},
	curse: {
		num: 174,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Curse",
		pp: 1.25,
		
		priority: 0,
		flags: {bypasssub: 1},
		volatileStatus: 'curse',
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost')) {
				move.target = move.nonGhostTarget as MoveTarget;
			} else if (source.isAlly(target)) {
				move.target = 'randomNormal';
			}
		},
		onTryHit(target, source, move) {
			if (!source.hasType('Ghost')) {
				delete move.volatileStatus;
				delete move.onHit;
				move.self = {boosts: {spe: -1, atk: 1, def: 1}};
			} else if (move.volatileStatus && target.volatiles['curse']) {
				return false;
			}
		},
		onHit(target, source) {
			this.directDamage(source.maxhp / 2, source, source);
		},
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 12,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "normal",
		nonGhostTarget: "self",
		type: "Ghost",
		zMove: {effect: 'curse'},
		contestType: "Tough",
		gen: 6,

	},
	////Grass-Type////
	aromatherapy: {
		num: 312,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aromatherapy",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1, distance: 1},
		onHit(target, source, move) {
			this.add('-activate', source, 'move: Aromatherapy');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && ((ally.hasAbility('sapsipper')) ||
						(ally.volatiles['substitute'] && !move.infiltrates))) {
					continue;
				}
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Grass",
		zMove: {effect: 'heal'},
		contestType: "Clever",
		gen: 6,

	},
	cottonguard: {
		num: 538,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cotton Guard",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 3,
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	cottonspore: {
		num: 178,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Cotton Spore",
		pp: 5,
		
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	grasswhistle: {
		num: 320,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Grass Whistle",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
		gen: 6,

	},
	grassyterrain: {
		num: 580,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Grassy Terrain",
		pp: 1.25,
		
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'grassyterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
				} else {
					this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	leechseed: {
		num: 73,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Leech Seed",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'leechseed',
		condition: {
			onStart(target) {
				this.add('-start', target, 'move: Leech Seed');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				const target = this.getAtSlot(pokemon.volatiles['leechseed'].sourceSlot);
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
		},
		onTryImmunity(target) {
			return !target.hasType('Grass');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	sleeppowder: {
		num: 79,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sleep Powder",
		pp: 1.875,
		
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
		gen: 6,

	},
	spikyshield: {
		num: 596,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spiky Shield",
		pp: 1.25,
		
		priority: 4,
		flags: {noassist: 1, failcopycat: 1},
		stallingMove: true,
		volatileStatus: 'spikyshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		gen: 6,

	},
	spore: {
		num: 147,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Spore",
		pp: 1.25,
		
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	stunspore: {
		num: 78,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Stun Spore",
		pp: 1.875,
		
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
		gen: 6,

	},
	synthesis: {
		num: 235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Synthesis",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	////Ground-Type////
	rototiller: {
		num: 563,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rototiller",
		pp: 1.25,
		
		priority: 0,
		flags: {distance: 1, nonsky: 1},
		onHitField(target, source) {
			const targets: Pokemon[] = [];
			let anyAirborne = false;
			for (const pokemon of this.getAllActive()) {
				if (!pokemon.runImmunity('Ground')) {
					this.add('-immune', pokemon);
					anyAirborne = true;
					continue;
				}
				if (pokemon.hasType('Grass')) {
					// This move affects every grounded Grass-type Pokemon in play.
					targets.push(pokemon);
				}
			}
			if (!targets.length && !anyAirborne) return false; // Fails when there are no grounded Grass types or airborne Pokemon
			for (const pokemon of targets) {
				this.boost({atk: 1, spa: 1}, pokemon, source);
			}
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMove: {boost: {atk: 1}},
		contestType: "Tough",
		gen: 6,

	},
	sandattack: {
		num: 28,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sand Attack",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMove: {boost: {evasion: 1}},
		contestType: "Cute",
		gen: 6,

	},
	spikes: {
		num: 191,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Spikes",
		pp: 2.5,
		
		priority: 0,
		flags: {reflectable: 1, nonsky: 1, mustpressure: 1},
		sideCondition: 'spikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded() || pokemon.hasItem('heavydutyboots')) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Ground",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	////Ice-Type////
	hail: {
		num: 258,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Hail",
		pp: 1.25,
		
		priority: 0,
		flags: {},
		weather: 'hail',
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	haze: {
		num: 114,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Haze",
		pp: 2.5,
		
		priority: 0,
		flags: {bypasssub: 1},
		onHitField() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "all",
		type: "Ice",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
		gen: 6,

	},
	mist: {
		num: 54,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mist",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'mist',
		condition: {
			duration: 5,
			onTryBoost(boost, target, source, effect) {
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if (source && target !== source) {
					let showMsg = false;
					let i: BoostID;
					for (i in boost) {
						if (boost[i]! < 0) {
							delete boost[i];
							showMsg = true;
						}
					}
					if (showMsg && !(effect as ActiveMove).secondaries) {
						this.add('-activate', target, 'move: Mist');
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Mist');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 4,
			onSideEnd(side) {
				this.add('-sideend', side, 'Mist');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
		gen: 6,

	},
	////Normal-Type////
	acupressure: {
		num: 367,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acupressure",
		pp: 1.25,
		
		priority: 0,
		flags: {},
		onHit(target) {
			const stats: BoostID[] = [];
			let stat: BoostID;
			for (stat in target.boosts) {
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				const randomStat = this.sample(stats);
				const boost: SparseBoostsTable = {};
				boost[randomStat] = 2;
				this.boost(boost);
			} else {
				return false;
			}
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMove: {effect: 'crit2'},
		contestType: "Tough",
		gen: 6,

	},
	attract: {
		num: 213,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Attract",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'attract',
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Attract', pokemon, source)) {
					this.debug('Attract event failed');
					return false;
				}

				if (effect.name === 'Cute Charm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.name === 'Destiny Knot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
			},
			onUpdate(pokemon) {
				if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectState.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Attract', '[silent]');
			},
		},
		onTryImmunity(target, source) {
			return (target.gender === 'M' && source.gender === 'F') || (target.gender === 'F' && source.gender === 'M');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	batonpass: {
		num: 226,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Baton Pass",
		pp: 1.875,
		
		priority: 0,
		flags: {},
		onHit(target) {
			if (!this.canSwitch(target.side) || target.volatiles['commanded']) {
				this.attrLastMove('[still]');
				this.add('-fail', target);
				return this.NOT_FAIL;
			}
		},
		self: {
			onHit(source) {
				source.skipBeforeSwitchOutEventFlag = true;
			},
		},
		selfSwitch: 'copyvolatile',
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	bellydrum: {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Belly Drum",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1},
		onHit(target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.maxhp / 2);
			this.boost({atk: 12}, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
		gen: 6,

	},
	captivate: {
		num: 445,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Captivate",
		
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onTryImmunity(pokemon, source) {
			return (pokemon.gender === 'M' && source.gender === 'F') || (pokemon.gender === 'F' && source.gender === 'M');
		},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {spd: 2}},
		contestType: "Cute",
		gen: 6,

	},
	confide: {
		num: 590,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Confide",
		
		pp: 7.5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		boosts: {
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
		gen: 6,

	},
	defensecurl: {
		num: 111,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defense Curl",
		
		pp: 2.5,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		volatileStatus: 'defensecurl',
		condition: {
			noCopy: true,
			onRestart: () => null,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
		gen: 6,

	},
	disable: {
		num: 50,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Disable",
		
		pp: 1.875,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'disable',
		onTryHit(target) {
			if (!target.lastMove || target.lastMove.isZ || target.lastMove.isMax || target.lastMove.id === 'struggle') {
				return false;
			}
		},
		condition: {
			duration: 5,
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				// The target hasn't taken its turn, or Cursed Body activated and the move was not used through Dancer or Instruct
				if (
					this.queue.willMove(pokemon) ||
					(pokemon === this.activePokemon && this.activeMove && !this.activeMove.isExternal)
				) {
					this.effectState.duration--;
				}
				if (!pokemon.lastMove) {
					this.debug(`Pokemon hasn't moved yet`);
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === pokemon.lastMove.id) {
						if (!moveSlot.pp) {
							this.debug('Move out of PP');
							return false;
						}
					}
				}
				if (effect.effectType === 'Ability') {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name, '[from] ability: Cursed Body', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Disable', pokemon.lastMove.name);
				}
				this.effectState.move = pokemon.lastMove.id;
			},
			onResidualOrder: 17,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Disable');
			},
			onBeforeMovePriority: 7,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && move.id === this.effectState.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	doubleteam: {
		num: 104,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Double Team",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			evasion: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
		gen: 6,

	},
	encore: {
		num: 227,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Encore",
		pp: 1,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, failencore: 1},
		volatileStatus: 'encore',
		condition: {
			duration: 3,
			noCopy: true, // doesn't get copied by Z-Baton Pass
			onStart(target) {
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || target.volatiles['dynamax']) return false;

				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
				const moveIndex = target.moves.indexOf(move.id);
				if (move.isZ || move.flags['failencore'] || !target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0) {
					// it failed
					return false;
				}
				this.effectState.move = move.id;
				this.add('-start', target, 'Encore');
				if (!this.queue.willMove(target)) {
					this.effectState.duration++;
				}
			},
			onOverrideAction(pokemon, target, move) {
				if (move.id !== this.effectState.move) return this.effectState.move;
			},
			onResidualOrder: 16,
			onResidual(target) {
				if (target.moves.includes(this.effectState.move) &&
					target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0) {
					// early termination if you run out of PP
					target.removeVolatile('encore');
				}
			},
			onEnd(target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove(pokemon) {
				if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
		gen: 6,

	},
	flash: {
		num: 148,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Flash",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	followme: {
		num: 266,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Follow Me",
		pp: 1.875,
		
		priority: 2,
		flags: {noassist: 1, failcopycat: 1},
		volatileStatus: 'followme',
		onTry(source) {
			return this.activePerHalf > 1;
		},
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				if (effect?.id === 'zpower') {
					this.add('-singleturn', target, 'move: Follow Me', '[zeffect]');
				} else {
					this.add('-singleturn', target, 'move: Follow Me');
				}
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				if (!this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
					if (move.smartTarget) move.smartTarget = false;
					this.debug("Follow Me redirected target of move");
					return this.effectState.target;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	glare: {
		num: 137,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Glare",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Tough",
		gen: 6,

	},
	growl: {
		num: 45,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Growl",
		pp: 7.5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
		gen: 6,

	},
	harden: {
		num: 106,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Harden",
		pp: 2.5,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		gen: 6,

	},
	healbell: {
		num: 215,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Heal Bell",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1, sound: 1, distance: 1, bypasssub: 1},
		onHit(target, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && ally.hasAbility('soundproof')) continue;
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
		gen: 6,

	},
	helpinghand: {
		num: 270,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Helping Hand",
		pp: 5,
		
		priority: 5,
		flags: {bypasssub: 1, noassist: 1, failcopycat: 1},
		volatileStatus: 'helpinghand',
		onTryHit(target) {
			if (!target.newlySwitched && !this.queue.willMove(target)) return false;
		},
		condition: {
			duration: 1,
			onStart(target, source) {
				this.effectState.multiplier = 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onRestart(target, source) {
				this.effectState.multiplier *= 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onBasePowerPriority: 10,
			onBasePower(basePower) {
				this.debug('Boosting from Helping Hand: ' + this.effectState.multiplier);
				return this.chainModify(this.effectState.multiplier);
			},
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	howl: {
		num: 336,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Howl",
		pp: 2.5,
		
		priority: 0,
		flags: {snatch: 1, sound: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "allies",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
		gen: 6,

	},
	leer: {
		num: 43,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Leer",
		pp: 7.5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cool",
		gen: 6,

	},
	lovelykiss: {
		num: 142,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Lovely Kiss",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	milkdrink: {
		num: 208,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Milk Drink",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	minimize: {
		num: 107,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Minimize",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'minimize',
		condition: {
			noCopy: true,
			onRestart: () => null,
			onSourceModifyDamage(damage, source, target, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
				];
				if (boostedMoves.includes(move.id)) {
					return this.chainModify(2);
				}
			},
			onAccuracy(accuracy, target, source, move) {
				const boostedMoves = [
					'stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault',
				];
				if (boostedMoves.includes(move.id)) {
					return true;
				}
				return accuracy;
			},
		},
		boosts: {
			evasion: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	morningsun: {
		num: 234,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Morning Sun",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'snow':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	nobleroar: {
		num: 568,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Noble Roar",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		gen: 6,

	},
	painsplit: {
		num: 220,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Pain Split",
		pp: 2.5,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, allyanim: 1},
		onHit(target, pokemon) {
			const targetHP = target.getUndynamaxedHP();
			const averagehp = Math.floor((targetHP + pokemon.hp) / 2) || 1;
			const targetChange = targetHP - averagehp;
			target.sethp(target.hp - targetChange);
			this.add('-sethp', target, target.getHealth, '[from] move: Pain Split', '[silent]');
			pokemon.sethp(averagehp);
			this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Pain Split');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	perishsong: {
		num: 195,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Perish Song",
		pp: 1.25,
		
		priority: 0,
		flags: {sound: 1, distance: 1, bypasssub: 1},
		onHitField(target, source, move) {
			let result = false;
			let message = false;
			for (const pokemon of this.getAllActive()) {
				if (this.runEvent('Invulnerability', pokemon, source, move) === false) {
					this.add('-miss', source, pokemon);
					result = true;
				} else if (this.runEvent('TryHit', pokemon, source, move) === null) {
					result = true;
				} else if (!pokemon.volatiles['perishsong']) {
					pokemon.addVolatile('perishsong');
					this.add('-start', pokemon, 'perish3', '[silent]');
					result = true;
					message = true;
				}
			}
			if (!result) return false;
			if (message) this.add('-fieldactivate', 'move: Perish Song');
		},
		condition: {
			duration: 4,
			onEnd(target) {
				this.add('-start', target, 'perish0');
				target.faint();
			},
			onResidualOrder: 24,
			onResidual(pokemon) {
				const duration = pokemon.volatiles['perishsong'].duration;
				this.add('-start', pokemon, 'perish' + duration);
			},
		},
		secondary: null,
		target: "all",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	playnice: {
		num: 589,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Play Nice",
		pp: 7.5,
		
		priority: 0,
		flags: {reflectable: 1, mirror: 1, bypasssub: 1},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
		gen: 6,

	},
	protect: {
		num: 182,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Protect",
		pp: 1.25,
		
		priority: 4,
		flags: {noassist: 1, failcopycat: 1},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	recover: {
		num: 105,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Recover",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	refresh: {
		num: 287,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Refresh",
		pp: 5,
		
		priority: 0,
		flags: {snatch: 1},
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
			pokemon.cureStatus();
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Cute",
		gen: 6,

	},
	roar: {
		num: 46,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Roar",
		pp: 1.875,
		
		priority: -6,
		flags: {reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1, noassist: 1, failcopycat: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
		gen: 6,

	},
	safeguard: {
		num: 219,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Safeguard",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'safeguard',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Safeguard');
					return 7;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.id === 'yawn') return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if (target !== source) {
					this.debug('interrupting setStatus');
					if (effect.name === 'Synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Safeguard');
					}
					return null;
				}
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
				if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
					return null;
				}
			},
			onSideStart(side, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-sidestart', side, 'Safeguard', '[persistent]');
				} else {
					this.add('-sidestart', side, 'Safeguard');
				}
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 3,
			onSideEnd(side) {
				this.add('-sideend', side, 'Safeguard');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	scaryface: {
		num: 184,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Scary Face",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
		gen: 6,

	},
	screech: {
		num: 103,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Screech",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
		boosts: {
			def: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Clever",
		gen: 6,

	},
	sharpen: {
		num: 159,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sharpen",
		pp: 2.5,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
		gen: 6,

	},
	shellsmash: {
		num: 504,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shell Smash",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: -1,
			spd: -1,
			atk: 2,
			spa: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
		gen: 6,

	},
	sing: {
		num: 47,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sing",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
		gen: 6,

	},
	slackoff: {
		num: 303,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Slack Off",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	smokescreen: {
		num: 108,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Smokescreen",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
		gen: 6,

	},
	softboiled: {
		num: 135,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Soft-Boiled",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	stockpile: {
		num: 254,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stockpile",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1},
		onTry(source) {
			if (source.volatiles['stockpile'] && source.volatiles['stockpile'].layers >= 3) return false;
		},
		volatileStatus: 'stockpile',
		condition: {
			noCopy: true,
			onStart(target) {
				this.effectState.layers = 1;
				this.effectState.def = 0;
				this.effectState.spd = 0;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
				const [curDef, curSpD] = [target.boosts.def, target.boosts.spd];
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectState.def--;
				if (curSpD !== target.boosts.spd) this.effectState.spd--;
			},
			onRestart(target) {
				if (this.effectState.layers >= 3) return false;
				this.effectState.layers++;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
				const curDef = target.boosts.def;
				const curSpD = target.boosts.spd;
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectState.def--;
				if (curSpD !== target.boosts.spd) this.effectState.spd--;
			},
			onEnd(target) {
				if (this.effectState.def || this.effectState.spd) {
					const boosts: SparseBoostsTable = {};
					if (this.effectState.def) boosts.def = this.effectState.def;
					if (this.effectState.spd) boosts.spd = this.effectState.spd;
					this.boost(boosts, target, target);
				}
				this.add('-end', target, 'Stockpile');
				if (this.effectState.def !== this.effectState.layers * -1 || this.effectState.spd !== this.effectState.layers * -1) {
					this.hint("In Gen 7, Stockpile keeps track of how many times it successfully altered each stat individually.");
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'heal'},
		contestType: "Tough",
		gen: 6,

	},
	substitute: {
		num: 164,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Substitute",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1, nonsky: 1},
		volatileStatus: 'substitute',
		onTryHit(source) {
			if (source.volatiles['substitute']) {
				this.add('-fail', source, 'move: Substitute');
				return this.NOT_FAIL;
			}
			if (source.hp <= source.maxhp / 4 || source.maxhp === 1) { // Shedinja clause
				this.add('-fail', source, 'move: Substitute', '[weak]');
				return this.NOT_FAIL;
			}
		},
		onHit(target) {
			this.directDamage(target.maxhp / 4);
		},
		condition: {
			onStart(target, source, effect) {
				if (effect?.id === 'shedtail') {
					this.add('-start', target, 'Substitute', '[from] move: Shed Tail');
				} else {
					this.add('-start', target, 'Substitute');
				}
				this.effectState.hp = Math.floor(target.maxhp / 4);
				if (target.volatiles['partiallytrapped']) {
					this.add('-end', target, target.volatiles['partiallytrapped'].sourceEffect, '[partiallytrapped]', '[silent]');
					delete target.volatiles['partiallytrapped'];
				}
			},
			onTryPrimaryHitPriority: -1,
			onTryPrimaryHit(target, source, move) {
				if (target === source || move.flags['bypasssub'] || move.infiltrates) {
					return;
				}
				let damage = this.actions.getDamage(source, target, move);
				if (!damage && damage !== 0) {
					this.add('-fail', source);
					this.attrLastMove('[still]');
					return null;
				}
				damage = this.runEvent('SubDamage', target, source, move, damage);
				if (!damage) {
					return damage;
				}
				if (damage > target.volatiles['substitute'].hp) {
					damage = target.volatiles['substitute'].hp as number;
				}
				target.volatiles['substitute'].hp -= damage;
				source.lastDamage = damage;
				if (target.volatiles['substitute'].hp <= 0) {
					if (move.ohko) this.add('-ohko');
					target.removeVolatile('substitute');
				} else {
					this.add('-activate', target, 'move: Substitute', '[damage]');
				}
				if (move.recoil || move.id === 'chloroblast') {
					this.damage(this.actions.calcRecoilDamage(damage, move, source), source, target, 'recoil');
				}
				if (move.drain) {
					this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
				}
				this.singleEvent('AfterSubDamage', move, null, target, source, move, damage);
				this.runEvent('AfterSubDamage', target, source, move, damage);
				return this.HIT_SUBSTITUTE;
			},
			onEnd(target) {
				this.add('-end', target, 'Substitute');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	supersonic: {
		num: 48,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Supersonic",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
		gen: 6,

	},
	sweetscent: {
		num: 230,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Sweet Scent",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			evasion: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cute",
		gen: 6,

	},
	swordsdance: {
		num: 14,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Swords Dance",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	tailwhip: {
		num: 39,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tail Whip",
		pp: 7.5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Cute",
		gen: 6,

	},
	teeterdance: {
		num: 298,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Teeter Dance",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		volatileStatus: 'confusion',
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMove: {boost: {spa: 1}},
		contestType: "Cute",
		gen: 6,

	},
	tickle: {
		num: 321,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Tickle",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, allyanim: 1},
		boosts: {
			atk: -1,
			def: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
		gen: 6,

	},
	whirlwind: {
		num: 18,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Whirlwind",
		pp: 1.875,
		
		priority: -6,
		flags: {reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1, wind: 1, noassist: 1, failcopycat: 1},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
		gen: 6,

	},
	wish: {
		num: 273,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wish",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		slotCondition: 'Wish',
		condition: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectState.hp = source.maxhp / 2;
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					const damage = this.heal(this.effectState.hp, target, target);
					if (damage) {
						this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
					}
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
		gen: 6,

	},
	workup: {
		num: 526,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Work Up",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {atk: 1}},
		contestType: "Tough",
		gen: 6,

	},
	yawn: {
		num: 281,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Yawn",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'yawn',
		onTryHit(target) {
			if (target.status || !target.runStatusImmunity('slp')) {
				return false;
			}
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onStart(target, source) {
				this.add('-start', target, 'move: Yawn', '[of] ' + source);
			},
			onResidualOrder: 23,
			onEnd(target) {
				this.add('-end', target, 'move: Yawn', '[silent]');
				target.trySetStatus('slp', this.effectState.source);
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
		gen: 6,

	},
	////Poison-Type////
	acidarmor: {
		num: 151,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Acid Armor",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
		gen: 6,

	},
	coil: {
		num: 489,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Coil",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			def: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
		gen: 6,

	},
	poisongas: {
		num: 139,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Poison Gas",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	poisonpowder: {
		num: 77,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Poison Powder",
		pp: 1.875,
		
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		status: 'psn',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	toxic: {
		num: 92,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Toxic",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		// No Guard-like effect for Poison-type users implemented in Scripts#tryMoveHit
		status: 'tox',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	toxicspikes: {
		num: 390,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Toxic Spikes",
		pp: 1.875,
		
		priority: 0,
		flags: {reflectable: 1, nonsky: 1, mustpressure: 1},
		sideCondition: 'toxicspikes',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers = 1;
			},
			onSideRestart(side) {
				if (this.effectState.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectState.layers++;
			},
			onEntryHazard(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots')) {
					return;
				} else if (this.effectState.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	venomdrench: {
		num: 599,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Venom Drench",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source, move) {
			if (target.status === 'psn' || target.status === 'tox') {
				return !!this.boost({atk: -1, spa: -1, spe: -1}, target, source, move);
			}
			return false;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	////Psychic-Type////
	agility: {
		num: 97,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Agility",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
		gen: 6,

	},
	allyswitch: {
		num: 502,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ally Switch",
		pp: 1.25,
		
		priority: 1,
		flags: {},
		stallingMove: true,
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
			const newPosition = (pokemon.position === 0 ? pokemon.side.active.length - 1 : 0);
			if (!pokemon.side.active[newPosition]) return false;
			if (pokemon.side.active[newPosition].fainted) return false;
			this.swapPosition(pokemon, newPosition, '[from] move: Ally Switch');
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spe: 2}},
		contestType: "Clever",
		gen: 6,

	},
	amnesia: {
		num: 133,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Amnesia",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spd: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	barrier: {
		num: 112,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Barrier",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
		gen: 6,

	},
	calmmind: {
		num: 347,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Calm Mind",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spa: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	cosmicpower: {
		num: 322,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Cosmic Power",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	gravity: {
		num: 356,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Gravity",
		pp: 1.25,
		
		priority: 0,
		flags: {nonsky: 1},
		pseudoWeather: 'gravity',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Gravity');
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Gravity', '[persistent]');
				} else {
					this.add('-fieldstart', 'move: Gravity');
				}
				for (const pokemon of this.getAllActive()) {
					let applies = false;
					if (pokemon.removeVolatile('bounce') || pokemon.removeVolatile('fly')) {
						applies = true;
						this.queue.cancelMove(pokemon);
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['skydrop']) {
						applies = true;
						this.queue.cancelMove(pokemon);

						if (pokemon.volatiles['skydrop'].source) {
							this.add('-end', pokemon.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
						}
						pokemon.removeVolatile('skydrop');
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['magnetrise']) {
						applies = true;
						delete pokemon.volatiles['magnetrise'];
					}
					if (pokemon.volatiles['telekinesis']) {
						applies = true;
						delete pokemon.volatiles['telekinesis'];
					}
					if (applies) this.add('-activate', pokemon, 'move: Gravity');
				}
			},
			onModifyAccuracy(accuracy) {
				if (typeof accuracy !== 'number') return;
				return this.chainModify([6840, 4096]);
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['gravity']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['gravity'] && !move.isZ) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['gravity'] && !move.isZ) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 2,
			onFieldEnd() {
				this.add('-fieldend', 'move: Gravity');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
		gen: 6,

	},
	healblock: {
		num: 377,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Heal Block",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'healblock',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Heal Block');
					return 7;
				}
				return 5;
			},
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'move: Heal Block');
				source.moveThisTurnResult = true;
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (move.flags['heal'] && !move.isZ && !move.isMax) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onResidualOrder: 20,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Heal Block');
			},
			onTryHeal(damage, target, source, effect) {
				if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
				return false;
			},
			onRestart(target, source) {
				this.add('-fail', target, 'move: Heal Block'); // Succeeds to supress downstream messages
				if (!source.moveThisTurnResult) {
					source.moveThisTurnResult = false;
				}
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Psychic",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
		gen: 6,

	},
	hypnosis: {
		num: 95,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Hypnosis",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
		gen: 6,

	},
	kinesis: {
		num: 134,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Kinesis",
		pp: 1.25,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {evasion: 1}},
		contestType: "Clever",
		gen: 6,

	},
	lightscreen: {
		num: 113,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Light Screen",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'lightscreen',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Special') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Light Screen weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Light Screen');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 2,
			onSideEnd(side) {
				this.add('-sideend', side, 'move: Light Screen');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	meditate: {
		num: 96,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Meditate",
		pp: 2.5,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	psychoshift: {
		num: 375,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Psycho Shift",
		pp: 1.875,
		
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit(target, source, move) {
			if (!source.status) return false;
			move.status = source.status;
		},
		self: {
			onHit(pokemon) {
				pokemon.cureStatus();
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spa: 2}},
		contestType: "Clever",
		gen: 6,

	},
	reflect: {
		num: 115,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Reflect",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'reflect',
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && this.effectState.target.hasAlly(target) && this.getCategory(move) === 'Physical') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Reflect weaken');
						if (this.activePerHalf > 1) return this.chainModify([2732, 4096]);
						return this.chainModify(0.5);
					}
				}
			},
			onSideStart(side) {
				this.add('-sidestart', side, 'Reflect');
			},
			onSideResidualOrder: 26,
			onSideResidualSubOrder: 1,
			onSideEnd(side) {
				this.add('-sideend', side, 'Reflect');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMove: {boost: {def: 1}},
		contestType: "Clever",
		gen: 6,

	},
	rest: {
		num: 156,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rest",
		pp: 1.875,
		
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onTry(source) {
			if (source.status === 'slp' || source.hasAbility('comatose')) return false;

			if (source.hp === source.maxhp) {
				this.add('-fail', source, 'heal');
				return null;
			}
			if (source.hasAbility(['insomnia', 'vitalspirit'])) {
				this.add('-fail', source, '[from] ability: ' + source.getAbility().name, '[of] ' + source);
				return null;
			}
		},
		onHit(target, source, move) {
			const result = target.setStatus('slp', source, move);
			if (!result) return result;
			target.statusState.time = 3;
			target.statusState.startTime = 3;
			this.heal(target.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		gen: 6,

	},
	teleport: {
		num: 100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Teleport",
		pp: 20,
		
		priority: -6,
		flags: {},
		onTry(source) {
			return !!this.canSwitch(source.side);
		},
		selfSwitch: true,
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'heal'},
		contestType: "Cool",
		gen: 6,

	},
	trickroom: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Trick Room",
		pp: 1.25,
		
		priority: -7,
		flags: {mirror: 1},
		pseudoWeather: 'trickroom',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', '[move] Trick Room');
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				if (source?.hasAbility('persistent')) {
					this.add('-fieldstart', 'move: Trick Room', '[of] ' + source, '[persistent]');
				} else {
					this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
				}
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('trickroom');
			},
			// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 1,
			onFieldEnd() {
				this.add('-fieldend', 'move: Trick Room');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMove: {boost: {accuracy: 1}},
		contestType: "Clever",
		gen: 6,

	},
	////Rock-Type////
	rockpolish: {
		num: 397,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rock Polish",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Rock",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
		gen: 6,

	},
	sandstorm: {
		num: 201,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sandstorm",
		pp: 1.25,
		
		priority: 0,
		flags: {wind: 1},
		weather: 'Sandstorm',
		secondary: null,
		target: "all",
		type: "Rock",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
		gen: 6,

	},
	stealthrock: {
		num: 446,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Stealth Rock",
		pp: 1.25,
		
		priority: 0,
		flags: {reflectable: 1, mustpressure: 1},
		sideCondition: 'stealthrock',
		condition: {
			// this is a side condition
			onSideStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onEntryHazard(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Cool",
		gen: 6,

	},
	wideguard: {
		num: 469,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Wide Guard",
		pp: 1.25,
		
		priority: 3,
		flags: {snatch: 1},
		sideCondition: 'wideguard',
		onTry() {
			return !!this.queue.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onSideStart(target, source) {
				this.add('-singleturn', source, 'Wide Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, move) {
				// Wide Guard blocks all spread moves
				if (move?.target !== 'allAdjacent' && move.target !== 'allAdjacentFoes') {
					return;
				}
				if (move.isZ || move.isMax) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Wide Guard');
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
		gen: 6,

	},
	////Steel-Type////
	autotomize: {
		num: 475,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Autotomize",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		onTryHit(pokemon) {
			const hasContrary = pokemon.hasAbility('contrary');
			if ((!hasContrary && pokemon.boosts.spe === 6) || (hasContrary && pokemon.boosts.spe === -6)) {
				return false;
			}
		},
		boosts: {
			spe: 2,
		},
		onHit(pokemon) {
			if (pokemon.weighthg > 1) {
				pokemon.weighthg = Math.max(1, pokemon.weighthg - 1000);
				this.add('-start', pokemon, 'Autotomize');
			}
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Beautiful",
		gen: 6,

	},
	irondefense: {
		num: 334,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Iron Defense",
		pp: 1.25,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Tough",
		gen: 6,

	},
	kingsshield: {
		num: 588,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "King's Shield",
		pp: 1.25,
		
		priority: 4,
		flags: {noassist: 1, failcopycat: 1, failinstruct: 1},
		stallingMove: true,
		volatileStatus: 'kingsshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("King's Shield"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
		gen: 6,

	},
	metalsound: {
		num: 319,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Metal Sound",
		pp: 5,
		
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
		gen: 6,

	},
	shiftgear: {
		num: 508,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shift Gear",
		pp: 1,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
		gen: 6,

	},
	////Water-Type////
	aquaring: {
		num: 392,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Aqua Ring",
		pp: 5,
		
		priority: 0,
		flags: {snatch: 1},
		volatileStatus: 'aquaring',
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Aqua Ring');
			},
			onResidualOrder: 6,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / 16);
			},
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	raindance: {
		num: 240,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rain Dance",
		pp: 1.25,
		
		priority: 0,
		flags: {},
		weather: 'RainDance',
		secondary: null,
		target: "all",
		type: "Water",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
		gen: 6,

	},
	withdraw: {
		num: 110,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Withdraw",
		pp: 2.5,
		
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMove: {boost: {def: 1}},
		contestType: "Cute",
		gen: 6,

	},

}	
	 
