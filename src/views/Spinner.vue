<script setup lang="ts">
import { computed, ref } from 'vue';

type Role = "DPS" | "TANK" | "HEALER" | "SUPPORT";
interface Spec {
    wowClass: string,
    color: string
    name: string,
    role: Role,

}

const specs: Spec[] = [
    {
        name: "Havoc",
        role: "DPS",
        wowClass: "Demon Hunter",
        color: "bg-dh-100"
    },
    {
        name: "Vengence",
        role: "TANK",
        wowClass: "Demon Hunter",
        color: "bg-dh-100",
    },
    {
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Frost",
        role: "DPS"
    },
    {
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Unholy",
        role: "DPS"
    },
    {
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Vengence",
        role: "TANK"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Guardian",
        role: "TANK"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Feral",
        role: "DPS"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Balance",
        role: "DPS"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Restoration",
        role: "HEALER"
    },
    {
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Preservation",
        role: "HEALER"
    },
    {
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Devestation",
        role: "DPS"
    },
    {
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Augmentation",
        role: "SUPPORT"
    },
    {
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Marksmanship",
        role: "DPS"
    },
    {
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Beast Mater",
        role: "DPS"
    },
    {
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Survival",
        role: "DPS"
    },
    {
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Arcane",
        role: "DPS"
    },
    {
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Fire",
        role: "DPS"
    },
    {
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Frost",
        role: "DPS"
    },
    {
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Brewmaster",
        role: "TANK"
    },
    {
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Mistweaver",
        role: "HEALER"
    },
    {
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Windwalker",
        role: "DPS"
    },
    {
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Holy",
        role: "HEALER"
    },
    {
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Protection",
        role: "TANK"
    },
    {
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Retribution",
        role: "DPS"
    },
    {
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Discipline",
        role: "HEALER"
    },
    {
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Holy",
        role: "HEALER"
    },
    {
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Shadow",
        role: "DPS"
    },
    {
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Assassination",
        role: "DPS"
    },
    {
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Outlaw",
        role: "DPS"
    },
    {
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Subtelty",
        role: "DPS"
    },
    {
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Elemental",
        role: "DPS"
    },
    {
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Enhancement",
        role: "DPS"
    },
    {
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Restoration",
        role: "HEALER"
    },
    {
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Affliction",
        role: "DPS"
    },
    {
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Demonology",
        role: "DPS"
    },
    {
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Destruction",
        role: "DPS"
    },
    {
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Arms",
        role: "DPS"
    },
    {
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Fury",
        role: "DPS"
    },
    {
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Protection",
        role: "TANK"
    }
];

const highlighted = ref(-1);


const getRandom = function () {
    let max = specs.length;
    let idx = Math.floor(Math.random() * max);
    return idx;
}
const spinning = ref(false);
const winner = computed(() => {
    return specs[highlighted.value];
});
const doSpin = async function (start: number, interval: number, max: number) {
    highlighted.value = getRandom();
    console.log("Selected", highlighted);
    if (Date.now() - start < max) {
        setTimeout(() => { doSpin(start, interval + 20, max) }, interval);
    } else {
        spinning.value = false;
    }
}

const spin = async function () {
    let nextInterval = 50;
    let maxTime = 5000;
    let start = Date.now();
    spinning.value = true;
    doSpin(start, nextInterval, maxTime);
}

</script>

<template>
    <main>
        <div class="w-[100vw] h-[100vh] bg-slate-900 flex">
            <div class="h-full">
                <div class="flex flex-wrap gap-2 items-center w-[500px]">
                    <div v-for="(s, idx) in specs" :key="s.name"
                        :class="[s.color, highlighted == idx ? 'highlighted' : '']" class="w-36 h-12">
                        <div class="p-2">{{ s.name }}</div>
                    </div>
                </div>
            </div>
            <div class="self-center">
                <div class="w-36 h-12" v-if="highlighted > -1">
                    <div :class="winner.color" class="w-36 h-12" v-if="winner">
                        <div class="p-2">{{ winner.name }}</div>
                    </div>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    v-on:click="spin()" v-if="!spinning">
                    Spin
                </button>
            </div>
        </div>
    </main>
</template>

<style>
.highlighted {
    @apply bg-red-500
}

input[type=button] {
    @apply bg-white;
}
</style>
