<script setup lang="ts">
const measurements = {
  shoulder: [
    { label: "width", value: 35 },
    { label: "to_neck", value: 13 }
  ],
  torso: [
    { label: "body_length", value: 64 },
    { label: "chest", value: 90 },
    { label: "waist", value: 85 },
    { label: "hip", value: 97 }
  ],
  leg: [
    { label: "inseam", value: 79 },
    { label: "thigh_circumference", value: 57 },
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
    { label: "wrist_circumference", value: 19 },
    { label: "hand_circumference", value: 21.5 },
    { label: "middle_finger_length", value: 8.6 }
  ],
  head: [
    { label: "circumference", value: 57 },
    { label: "neck_circumference", value: 38 },
    { label: "face_height", value: 17 }
  ]
}

const formatKey = (key: string): string => {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}
</script>

<template>
  <main class="center index relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <MainWallpaper class="absolute inset-0 opacity-50" />
    <div class="relative z-10 py-16">
      <h1 class="font-6xl font-bold text-center drop-shadow-lg">Dame's Kigurumi Measurements</h1>
      <ScrollButton to="#content" class="mt-4" />
    </div>
  </main>
  <section id="content" class="container min-h-screen bg-image bg-tertiary-wallpaper py-12">
    <h2 class="font-6xl font-bold text-center mb-8">Measurements (cm)</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 mx-auto">
      <div v-for="(items, sectionName) in measurements" :key="sectionName" class="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 class="font-4xl font-semibold capitalize text-gray-800 mb-4">{{ sectionName }}</h3>
        <ul class="font-2xl">
          <li v-for="item in items" :key="item.label">
            <p>
              <span class="font-bold text-gray-700">{{ formatKey(item.label) }}</span>: {{ item.value }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-image {
  background-size: cover;
  background-position: center;
}
.bg-tertiary-wallpaper {
  background-color: #f9fafb; /* Fallback color */
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  margin-bottom: 0.5rem;
}
</style>
