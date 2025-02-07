<script setup>
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@common/ui/select";
  import england from "@assets/images/england.png";
  import vietnam from "@assets/images/vietnam.png";

  const headerItems = [
    { id: 1, title: "Tutorials", icon: "tutorial" },
    { id: 2, title: "Case Studies", icon: "studies" },
    { id: 1, title: "Resources", icon: "resources" },
  ];

  const languages = [
    {
      id: 1,
      title: "ENGLISH",
      value: "EN",
      image: england,
    },
    {
      id: 1,
      title: "VIỆT NAM",
      value: "VI",
      image: vietnam,
    },
  ];
</script>

<template>
  <div class="flex flex-row gap-6 items-center">
    <p v-for="item in headerItems" :key="item.id" class="text-lg">
      {{ item.title }}
    </p>
    <Select :default-value="languages[0].value">
      <SelectTrigger class="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="item in languages"
            :key="item.id"
            :value="item.value"
          >
            <div class="flex gap-1">
              <img :src="item.image" />
              <p>
                {{ item.title }}
              </p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<style scoped></style>
