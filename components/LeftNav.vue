<template>
  <div class="nav-wrapper w-[33%]">
    <Disclosure as="nav" class="bg-gray-800 max-w-sm" v-slot="{ open }">
      <div class="mx-auto">
        <div class="relative flex items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-between">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
              :aria-current="item.href === current ? 'page' : undefined">{{ item.name }}</a>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" :href="item.href"
            :aria-current="item.href === current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
const route = useRoute();
const config = useRuntimeConfig();
const { siteURL, apiURL } = config.public;

const current = `${siteURL}/${route.fullPath}`;
const { data: navigation, error, refresh } = await useFetch(`${apiURL}/left-menu`);
</script>