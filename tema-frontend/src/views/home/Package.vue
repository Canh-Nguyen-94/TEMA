<script setup>
  import { Button } from "@common/ui";
  import { ref } from "vue";

  const selected = ref(1);

  const packages = [
    {
      id: 1,
      title: "Development",
      price: "10",
      descriptions: ["1 Module Javascript", "1 Module Human Resources"],
      button: "Buy Now",
    },
    {
      id: 2,
      title: "IT & Software",
      price: "30",
      descriptions: [
        "1 Module Javascript",
        "1 Module Human Resources",
        "2 Module Sales Teams",
        "Pack Marketing Skills",
        "5 Module Study Case",
      ],
      button: "Buy Now",
    },
    {
      id: 3,
      title: "Development",
      price: "10",
      descriptions: [
        "1 Module Javascript",
        "1 Module Human Resources",
        "2 Module Sales Teams",
      ],
      button: "Buy Now",
    },
  ];
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center mt-[175px]">
    <p class="text-[34px] md:text-5xl font-bold mb-[35px] text-center">
      Choose your package
    </p>
    <p class="text-[22px] font-[250] mb-20 text-center leading-[22px] px-20">
      We provide various types of packages just for you
    </p>
    <div class="flex flex-col md:flex-row gap-8 items-center md:items-end px-4">
      <div
        v-for="item in packages"
        :key="item.id"
        class="w-[393px] p-12 relative flex flex-col justify-center items-center gap-10 rounded-[10px] bg-foreground"
        :class="item.id == 2 ? 'h-[548px] bg-primary' : 'h-[488px]'"
      >
        <div v-if="item.id == 2" class="absolute left-[47px] top-[149px]">
          <img src="@assets/images/new.png" alt="" />
        </div>
        <p
          class="text-2xl uppercase"
          :class="item.id == 2 ? 'text-background' : ''"
        >
          {{ item.title }}
        </p>
        <div class="flex">
          <p :class="item.id == 2 ? 'text-background' : ''">$</p>
          <p
            class="text-5xl font-bold"
            :class="item.id == 2 ? 'text-background' : ''"
          >
            {{ item.price }}
          </p>
        </div>
        <div class="flex flex-col justify-end items-center">
          <p
            v-for="description in item.descriptions"
            :key="description"
            :class="item.id == 2 ? 'text-background' : ''"
          >
            {{ description }}
          </p>
        </div>
        <Button
          class="w-full rounded-[10px]"
          :class="item.id == 2 ? 'bg-accent' : 'text-accent'"
          >{{ item.button }}</Button
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
