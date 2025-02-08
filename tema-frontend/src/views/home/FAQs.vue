<script setup>
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@common/ui/accordion";

  const faqs = [
    {
      id: 1,
      question: "01. Can I find the right information faster?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: 2,
      question: "02. How to share feature demos and ideas?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: 3,
      question: "03. How to get insights from users?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: 4,
      question: "04. Can I develop my website without code?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
  ];
</script>

<template>
  <div class="flex flex-col items-center mt-3 md:mt-[169px]">
    <p class="text-5xl font-bold mb-25">FAQs</p>
    <div class="px-4 md:px-[50px] w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          v-for="(faq, index) in faqs"
          :key="faq.id"
          :value="faq.id"
          class="py-10"
          :class="index === faq.length - 1 ? '' : 'border-b-[2px]'"
        >
          <AccordionTrigger
            class="text-[21px] md:text-[34px] text-left leading-6 flex items-center"
            showDropdown
          >
            {{ faq.question }}
          </AccordionTrigger>
          <AccordionContent class="md:pt-8"> {{ faq.answer }}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<style scoped></style>
