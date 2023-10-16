export const Items: {[itemid: string]: ModdedItemData} = {
	meteorite: {
		name: "Meteorite",
		spritenum: 615,
		megaStone: "Rayquaza-Mega",
		megaEvolves: "Rayquaza",
		itemUser: ["Rayquaza"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		desc: "If held by a Rayquaza, this item allows it to Mega Evolve in battle.",
	},	
	bigroot: {
		name: "Big Root",
		spritenum: 29,
		fling: {
		basePower: 10,
		},
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
		const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
		if (heals.includes(effect.id)) {
			return this.chainModify([6964, 4096]);
		}
	},
	num: 296,
	gen: 4,
},
	shellbell: {
		name: "Shell Bell",
		spritenum: 438,
		fling: {
		basePower: 30,
		},
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
		if (move.totalDamage && !pokemon.forceSwitchFlag) {
			this.heal(move.totalDamage / 4, pokemon);
		}
	},
	num: 253,
	gen: 3,
},
};