<script setup>
  import { ref } from "vue";
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
  import { headerItems } from "@assets/data";
  import { CircleChevronRight, Menu, X } from "lucide-vue-next";

  const model = defineModel();

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
  <div
    class="flex flex-row gap-6 justify-between items-center mt-4 md:mt-[60px]"
  >
    <RouterLink to="/">
      <p class="flex gap-2">
        <CircleChevronRight class="bg-primary text-background rounded-[50%]" />
        <span class="md:hidden text-lg font-bold">macode.</span>
      </p>
    </RouterLink>
    <p
      v-for="item in headerItems"
      :key="item.id"
      class="text-lg font-[250] leading-[26px] hidden lg:block"
    >
      <RouterLink :to="item.path">
        {{ item.title }}
      </RouterLink>
    </p>
    <div class="flex gap-2">
      <Select :default-value="languages[0].value">
        <SelectTrigger class="w-[180px] bg-input rounded-[12px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent class="bg-input">
          <SelectGroup>
            <SelectItem
              v-for="item in languages"
              :key="item.id"
              :value="item.value"
              class="hover:bg-background"
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
      <Menu
        class="md:hidden text-primary cursor-pointer"
        @click="model = !model"
      />
    </div>
  </div>
</template>

<style scoped></style>
