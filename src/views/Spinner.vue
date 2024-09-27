<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import { FortuneWheel, type Data } from 'vue3-fortune-wheel';

type Role = "DPS" | "TANK" | "HEALER" | "SUPPORT";
interface Spec {
    wowClass: string,
    color: string
    classColor: string,
    name: string,
    role: Role,

}

const colors = {
    'dk': '#c41e3a',
    'dh': '#a330c9',
    'druid': '#ff7c0a',
    'evoker': '#33937f',
    'hunter': '#aad372',
    'mage': '#3fc7eb',
    'monk': '#00ff98',
    'paladin': '#f48cba',
    'priest': '#fff',
    'rogue': '#fff468',
    'shaman': '#0070dd',
    'warlock': '#8788ee',
    'warrior': '#c69b6d',
}

const specs: Spec[] = [
    {
        name: "Havoc",
        role: "DPS",
        wowClass: "Demon Hunter",
        color: "bg-dh-100",
        classColor: "dh"
    },
    {
        name: "Vengence",
        role: "TANK",
        wowClass: "Demon Hunter",
        color: "bg-dh-100",
        classColor: "dh"
    },
    {
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Frost",
        role: "DPS",
        classColor: "dk"
    },
    {
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Unholy",
        role: "DPS",
        classColor: "dk"
    },
    {
        wowClass: "Death Knight",
        color: "bg-dk-100",
        name: "Blood",
        role: "TANK",
        classColor: "dk"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Guardian",
        role: "TANK",
        classColor: "druid"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Feral",
        role: "DPS",
        classColor: "druid"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Balance",
        role: "DPS",
        classColor: "druid"
    },
    {
        wowClass: "Druid",
        color: "bg-druid-100",
        name: "Restoration",
        role: "HEALER",
        classColor: "druid"
    },
    {
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Preservation",
        role: "HEALER",
        classColor: "evoker"
    },
    {
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Devestation",
        role: "DPS",
        classColor: "evoker"
    },
    {
        wowClass: "evoker",
        color: "bg-evoker-100",
        name: "Augmentation",
        role: "SUPPORT",
        classColor: "evoker"
    },
    {
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Marksmanship",
        role: "DPS",
        classColor: "hunter"
    },
    {
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Beast Mater",
        role: "DPS",
        classColor: "hunter"
    },
    {
        wowClass: "Hunter",
        color: "bg-hunter-100",
        name: "Survival",
        role: "DPS",
        classColor: "hunter"
    },
    {
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Arcane",
        role: "DPS",
        classColor: "mage"
    },
    {
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Fire",
        role: "DPS",
        classColor: "mage"
    },
    {
        wowClass: "Mage",
        color: "bg-mage-100",
        name: "Frost",
        role: "DPS",
        classColor: "mage"
    },
    {
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Brewmaster",
        role: "TANK",
        classColor: "monk"
    },
    {
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Mistweaver",
        role: "HEALER",
        classColor: "monk"
    },
    {
        wowClass: "Monk",
        color: "bg-monk-100",
        name: "Windwalker",
        role: "DPS",
        classColor: "monk"
    },
    {
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Holy",
        role: "HEALER",
        classColor: "paladin"
    },
    {
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Protection",
        role: "TANK",
        classColor: "paladin"
    },
    {
        wowClass: "Paladin",
        color: "bg-paladin-100",
        name: "Retribution",
        role: "DPS",
        classColor: "paladin"
    },
    {
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Discipline",
        role: "HEALER",
        classColor: "priest"
    },
    {
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Holy",
        role: "HEALER",
        classColor: "priest"
    },
    {
        wowClass: "Priest",
        color: "bg-priest-100",
        name: "Shadow",
        role: "DPS",
        classColor: "priest"
    },
    {
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Assassination",
        role: "DPS",
        classColor: "rogue"
    },
    {
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Outlaw",
        role: "DPS",
        classColor: "rogue"
    },
    {
        wowClass: "Rouge",
        color: "bg-rogue-100",
        name: "Subtelty",
        role: "DPS",
        classColor: "rogue"
    },
    {
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Elemental",
        role: "DPS",
        classColor: "shaman"
    },
    {
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Enhancement",
        role: "DPS",
        classColor: "shaman"
    },
    {
        wowClass: "Shaman",
        color: "bg-shaman-100",
        name: "Restoration",
        role: "HEALER",
        classColor: "shaman"
    },
    {
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Affliction",
        role: "DPS",
        classColor: "warlock"
    },
    {
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Demonology",
        role: "DPS",
        classColor: "warlock"
    },
    {
        wowClass: "Warlock",
        color: "bg-warlock-100",
        name: "Destruction",
        role: "DPS",
        classColor: "warlock"
    },
    {
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Arms",
        role: "DPS",
        classColor: "warrior"
    },
    {
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Fury",
        role: "DPS",
        classColor: "warrior"
    },
    {
        wowClass: "Warrior",
        color: "bg-warrior-100",
        name: "Protection",
        role: "TANK",
        classColor: "warrior"
    }
];

const highlighted = ref(-1);

function shuffleArray(array: any[]) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
const logo: ImgParams = {
  src: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-700x394.png',
  width: 100,
  height: 120
}
const getRandom = function () {
    let max = specs.length;
    let idx = Math.floor(Math.random() * max);
    return idx;
}

const spinWinnerId = ref(-1);
const spinning = ref(false);
const winner = computed(() => {
    return specs[highlighted.value];
});

const wheelData = computed(() => {
    let i = 0;
    let arr = [...specs];
    shuffleArray(arr);
    return arr.map(s => {
        return {
            id: i++, value: s.name, bgColor: (colors as any)[s.classColor], color: 'red'
        }
    })
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

const spinWinner: Ref<Data |undefined> = ref();
const done = function(result: Data){
   spinWinner.value = result; 
};

const spin = async function () {
    let nextInterval = 50;
    let maxTime = 5000;
    let start = Date.now();
    spinning.value = true;
    doSpin(start, nextInterval, maxTime);
}

const wheel = ref<InstanceType<typeof FortuneWheel> | null>(null)

const launchWheel = () => {
    spinWinner.value = undefined;
  wheel.value?.spin()
}

</script>

<template>
    <main>
        <div class="w-[100vw] h-[100vh] bg-slate-900 flex">
            <!-- <div class="h-full"> -->
            <!--     <div class="flex flex-wrap gap-2 items-center w-[500px]"> -->
            <!--         <div v-for="(s, idx) in specs" :key="s.name" -->
            <!--             :class="[s.color, highlighted == idx ? 'highlighted' : '']" class="w-36 h-12"> -->
            <!--             <div class="p-2">{{ s.name }}</div> -->
            <!--         </div> -->
            <!--     </div> -->
            <!-- </div> -->
            <!-- <div class="self-center"> -->
            <!--     <div class="w-36 h-12" v-if="highlighted > -1"> -->
            <!--         <div :class="winner.color" class="w-36 h-12" v-if="winner"> -->
            <!--             <div class="p-2">{{ winner.name }}</div> -->
            <!--         </div> -->
            <!--     </div> -->
            <!--     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-on:click="spin()" -->
            <!--         v-if="!spinning"> -->
            <!--         Spin -->
            <!--     </button> -->
            <!-- </div> -->
            <div>
                <FortuneWheel ref="wheel" v-model="spinWinnerId" @done="done" :data="wheelData" :img-params="logo"/>
                <div class="w-36 h-12"  v-if="spinWinner">
                    <div :style="{ background: spinWinner.bgColor}" class="w-36 h-12">
                        <div class="p-2">{{ spinWinner.value }}</div>
                    </div>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-on:click="launchWheel()">
                    Spin Wheel
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
