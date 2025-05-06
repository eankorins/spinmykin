<script setup lang="ts">
import { computed, ref } from 'vue';

type Role = "DPS" | "TANK" | "HEALER" | "SUPPORT";
interface Spec {
    id: number,
    wowClass: string,
    color: string
    name: string,
    selected:boolean,
    role: Role,
}

const specs = ref<Spec[]>([
    {
        id: 1,
        name: "Havoc",
        selected: false, role: "DPS",
        wowClass: "Demon Hunter",
        color: "bg-dh-100"
    },
    {
        id: 2,
        name: "Vengence",
        selected:true, role: "TANK",
        wowClass: "Demon Hunter",
        color: "bg-dh-100",
    },
    {
        id: 3,
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Frost",
        selected:true, role: "DPS"
    },
    {
        id: 4,
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Unholy",
        selected:true, role: "DPS"
    },
    {
        id: 5,
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Blood",
        selected:true, role: "TANK"
    },
    {
        id: 6,
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Guardian",
        selected:true, role: "TANK"
    },
    {
        id: 7,
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Feral",
        selected:true, role: "DPS"
    },
    {
        id: 8,
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Balance",
        selected:true, role: "DPS"
    },
    {
        id: 9,
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Restoration",
        selected:true, role: "HEALER"
    },
    {
        id: 10,
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Preservation",
        selected:true, role: "HEALER"
    },
    {
        id: 11,
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Devestation",
        selected:true, role: "DPS"
    },
    {
        id: 12,
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Augmentation",
        selected: false, role: "SUPPORT"
    },
    {
        id: 13,
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Marksmanship",
        selected:true, role: "DPS"
    },
    {
        id: 14,
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Beast Mater",
        selected:true, role: "DPS"
    },
    {
        id: 15,
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Survival",
        selected:true, role: "DPS"
    },
    {
        id: 16,
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Arcane",
        selected:true, role: "DPS"
    },
    {
        id: 17,
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Fire",
        selected:true, role: "DPS"
    },
    {
        id: 18,
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Frost",
        selected:true, role: "DPS"
    },
    {
        id: 19,
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Brewmaster",
        selected:true, role: "TANK"
    },
    {
        id: 20,
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Mistweaver",
        selected:true, role: "HEALER"
    },
    {
        id: 21,
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Windwalker",
        selected:true, role: "DPS"
    },
    {
        id: 22,
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Holy",
        selected:true, role: "HEALER"
    },
    {
        id: 23,
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Protection",
        selected:true, role: "TANK"
    },
    {
        id: 24,
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Retribution",
        selected:true, role: "DPS"
    },
    {
        id: 25,
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Discipline",
        selected:true, role: "HEALER"
    },
    {
        id: 26,
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Holy",
        selected:true, role: "HEALER"
    },
    {
        id: 27,
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Shadow",
        selected:true, role: "DPS"
    },
    {
        id: 28,
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Assassination",
        selected:true, role: "DPS"
    },
    {
        id: 29,
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Outlaw",
        selected:true, role: "DPS"
    },
    {
        id: 30,
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Subtelty",
        selected:true, role: "DPS"
    },
    {
        id: 31,
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Elemental",
        selected:true, role: "DPS"
    },
    {
        id: 32,
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Enhancement",
        selected:true, role: "DPS"
    },
    {
        id: 33,
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Restoration",
        selected:true, role: "HEALER"
    },
    {
        id: 34,
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Affliction",
        selected:true, role: "DPS"
    },
    {
        id: 35,
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Demonology",
        selected:true, role: "DPS"
    },
    {
        id: 36,
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Destruction",
        selected:true, role: "DPS"
    },
    {
        id: 37,
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Arms",
        selected:true, role: "DPS"
    },
    {
        id: 38,
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Fury",
        selected:true, role: "DPS"
    },
    {
        id: 39,
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Protection",
        selected:true, role: "TANK"
    }
]);

const highlighted = ref(-1);


const getRandom = function () {
    let max = selectedSpecs.value.length;
    let idx = Math.floor(Math.random() * max);
    return idx;
}
const spinning = ref(false);
const winnerHistory = ref<Spec[]>([]);
const winner = computed(() => {
    return specs.value.find(s => s.id == highlighted.value);
});

const selectedSpecs = computed(() => {
    return specs.value.filter(s => s.selected);    
})
const doSpin = function (start: number, interval: number, max: number, toLast: boolean) {
    highlighted.value = selectedSpecs.value[getRandom()].id;
    console.log("Selected", highlighted);
    if (Date.now() - start < max) {
        setTimeout(() => { doSpin(start, interval + 10, max, toLast) }, interval);
    } else {
        if(winner.value){
            winnerHistory.value.push(winner.value);
            winner.value.selected = false;
        }
        spinning.value = false;
        if(toLast && selectedSpecs.value.length > 1){
            spin(toLast);
        }
    }
}

const toggleSpec = (s:Spec, idx: number) => {
    s.selected = !s.selected;
}

const spin = function (toLast: boolean) {
    let nextInterval = 50;
    let maxTime = toLast ? 3000 : 5000 ;
    let start = Date.now();
    spinning.value = true;
    doSpin(start, nextInterval, maxTime, toLast);
}

</script>

<template>
    <main>
        <div class="w-[100vw] h-[100vh] bg-slate-900 flex flex-col justify-center p-24">
            <div class="h-[900px] flex">
                <div class="flex flex-wrap gap-2 items-center w-[500px]">
                    <div v-for="(s, idx) in specs" :key="s.name"
                        :class="[s.color, s.selected ? '' : 'opacity-40', highlighted == s.id ? 'highlighted' : '']"
                        class="w-36 h-12 cursor-pointer" v-on:click="toggleSpec(s, idx)">
                        <div class="p-2">{{ s.name }}</div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-wrap gap-2 items-center w-[500px]">
                        <div v-for="(s, idx) in winnerHistory" :key="s.name"
                            :class="[s.color]"
                            class="w-36 h-12 cursor-pointer" v-on:click="toggleSpec(s, idx)">
                            <div class="p-2">{{ s.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-on:click="spin(false)"
                    v-if="!spinning">
                    Spin
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-on:click="spin(true)"
                    v-if="!spinning">
                    Spin To Last Spec Standing
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

