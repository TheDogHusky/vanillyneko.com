<script setup lang="ts">
definePageMeta({
    auth: true,
    middleware: ['sidebase-auth', 'require-admin']
});

const measurements = {
    shoulder: [
        { label: "width", value: 38 },
        { label: "to_neck", value: 13 }
    ],
    torso: [
        { label: "body_length", value: 64 },
        { label: "height", value: 175.26 },
        { label: "chest", value: 90 },
        { label: "waist", value: 85 },
        { label: "hip", value: 97 }
    ],
    leg: [
        { label: "inseam", value: 85 },
        { label: "thigh_circumference", value: 57 },
        { label: "knee_circumference", value: 40 },
        { label: "calf_circumference", value: 36 },
        { label: "ankle_circumference", value: 24 }
    ],
    foot: [
        { label: "length", value: 27 },
        { label: "big_toe_length", value: 4.1 },
        { label: "big_toe_circumference", value: 0.85 },
        { label: "little_toe_length", value: 3.5 },
        { label: "little_toe_circumference", value: 5.5 }
    ],
    arm: [
        { label: "outer_arm_length_right", value: 60 },
        { label: "inner_arm_length_right", value: 53 },
        { label: "sleeve_circumference", value: 28 },
        { label: "elbow_circumference", value: 27 },
        { label: "shoulder_circumference", value: 35 },
        { label: "wrist_circumference", value: 19 },
        { label: "hand_circumference", value: 21.5 },
        { label: "palm_length", value: 21 },
        { label: "middle_finger_length", value: 8.6 }
    ],
    head: [
        { label: "circumference", value: 57 },
        { label: "neck_circumference", value: 38 },
        { label: "neck_length", value: 15 },
        { label: "head_length", value: 22 },
        { label: "face_height", value: 17 }
    ]
}

const formatKey = (key: string): string => {
    return key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

const formatSectionName = (sectionName: string): string => {
    return sectionName.slice(0, 1).toUpperCase() + sectionName.slice(1);
}
</script>

<template>
    <main class="center container gap-2xl index">
        <MainWallpaper/>
        <h1 class="font-6xl">Dame/KigFeverClub Kigurumi Measurements</h1>
        <ScrollButton to="#content" />
    </main>
    <section id="content" class="container min-h-screen bg-image bg-tertiary-wallpaper gap-2xl">
        <h2 class="font-6xl">Measurements (cm)</h2>
        <div class="dm-list">
            <div v-for="(items, sectionName) in measurements" :key="sectionName"
                 class="dm-item">
                <h3 class="dm-item-title">{{ formatSectionName(sectionName) }}</h3>
                <ul class="dm-item-content">
                    <li v-for="item in items" :key="item.label">
                        <p>
                            <span class="font-bold">{{ formatKey(item.label) }}</span>: {{ item.value }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>