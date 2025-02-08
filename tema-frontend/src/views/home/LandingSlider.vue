<script setup>
  import { ref } from "vue";
  import { watchOnce } from "@vueuse/core";

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@common/ui/carousel";
  import { Card, CardContent } from "@common/ui/card";
  import image1 from "@assets/images/circuit.png";
  import image2 from "@assets/images/anchor.png";
  import image3 from "@assets/images/trident.png";

  const emblaMainApi = ref();
  const emblaThumbnailApi = ref();
  const selectedIndex = ref(0);

  const items = [
    {
      id: 1,
      image: image1,
      title: "Best Tutors",
      description: "Bring your designvision to life in clean,semantic HTML5",
    },
    {
      id: 2,
      image: image2,
      title: "Flexible",
      description: "Connect your marketing tools with built-in integrations",
    },
    {
      id: 3,
      image: image3,
      title: "Easy Access",
      description: "Connect your marketing tools with built-in integrations",
    },
  ];

  function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
  }

  function onThumbClick(index) {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
    emblaThumbnailApi.value.scrollTo(index);
  }

  watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  });
</script>

<template>
  <div
    class="flex flex-wrap md:flex-nowrap md:gap-20 items-center w-full overflow-hidden md:pt-[119px] pb-[56px] px-4 md:pl-[50px] bg-foreground"
  >
    <div class="md:w-[40%]">
      <p
        class="font-bold text-[34px] md:text-5xl leading-[40px] mb-4 md:mb-[46px]"
      >
        Our Features Special For You
      </p>
      <p
        class="font-[250] text-base md:text-[22px] mb-5 md:mb-[87px] leading-[26px]"
      >
        We provide various special features for all of you
      </p>
    </div>
    <div class="w-full md:w-60% flex flex-col items-center">
      <Carousel
        class="relative w-full mb-[66px] md:mt-0"
        :opts="{
          align: 'start',
          loop: true,
        }"
        @init-api="(val) => (emblaThumbnailApi = val)"
      >
        <CarouselContent>
          <CarouselItem
            v-for="item in items"
            :key="item.id"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <div
              class="w-[317px] h-[343px] rounded-[14px] p-8"
              :class="item.id == 2 ? 'bg-accent' : 'bg-background'"
            >
              <img :src="item.image" :alt="item.title" class="mb-20" />
              <p class="font-bold text-[34px] mb-4">
                {{ item.title }}
              </p>
              <p class="leading-[22px]">{{ item.description }}</p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <Carousel
        :opts="{
          align: 'start',
          loop: true,
        }"
        @init-api="(val) => (emblaMainApi = val)"
        class="md:translate-x-[-270px] md:translate-y-[-30px]"
      >
        <CarouselContent>
          <div class="flex gap-3">
            <div
              v-for="(item, index) in items"
              :key="item.id"
              class="basis-1/4 cursor-pointer"
              @click="onThumbClick(index)"
            >
              <span
                :class="
                  index === selectedIndex
                    ? 'bg-accent w-[82px]'
                    : 'bg-muted w-[51px]'
                "
                class="block font-semibold h-[11px]"
              ></span>
            </div>
          </div>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</template>
<style></style>
