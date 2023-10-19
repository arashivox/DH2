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
		inherit: true,
		desc: "Holder gains 1.75x HP from draining moves.",
		shortDesc: "Holder gains 1.75x HP from draining moves.",
		onTryHeal(damage, target, source, effect) {
		const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
		if (heals.includes(effect.id)) {
			return this.chainModify([7168, 4096]);
		}
	},
	gen: 6,
},
	shellbell: {
		inherit: true,
		desc: "After an attack, holder gains 1/4 of the damage in HP dealt to other Pokemon.",
		shortDesc: "After an attack, holder gains 1/4 of the damage in HP dealt to other Pokemon.",
		onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
		if (move.totalDamage && !pokemon.forceSwitchFlag) {
			this.heal(move.totalDamage / 4, pokemon);
		}
	},
	gen: 6,
},
};