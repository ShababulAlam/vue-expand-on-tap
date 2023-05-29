<template>
  <div>
    <div :style="previewHeightCss" class="relative overflow-clip">
      <slot />
      <div
        v-if="!expandDetailsSection"
        class="absolute bottom-0 w-full bg-gradient-fade flex justify-center"
        :style="expandOpenSectionStyle"
        role="button"
        @click="
          () => {
            expandDetailsSection = !expandDetailsSection;
          }
        "
      >
        <p class="">
          {{ placeholderClosed }}
        </p>
        <div class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.351 8.751a1.2 1.2 0 0 1 1.698 0L12 12.703l3.951-3.952a1.2 1.2 0 1 1 1.697 1.697l-4.8 4.8a1.2 1.2 0 0 1-1.697 0l-4.8-4.8a1.2 1.2 0 0 1 0-1.697Z"
              fill="#303339"
            />
          </svg>
        </div>
      </div>

      <div
        v-else
        class="w-full flex justify-center"
        :style="expandCloseSectionStyle"
        role="button"
        @click="
          () => {
            expandDetailsSection = !expandDetailsSection;
          }
        "
      >
        <p class="text-sm font-medium">{{ placeholderExpanded }}</p>
        <div class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.351 8.751a1.2 1.2 0 0 1 1.698 0L12 12.703l3.951-3.952a1.2 1.2 0 1 1 1.697 1.697l-4.8 4.8a1.2 1.2 0 0 1-1.697 0l-4.8-4.8a1.2 1.2 0 0 1 0-1.697Z"
              fill="#303339"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpandOnTap",
  data() {
    return {
      expandDetailsSection: false,
    };
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    placeholderClosed: {
      type: String,
      default: "Tap to expand",
    },
    placeholderExpanded: {
      type: String,
      default: "Tap to close",
    },
    previewHeight: {
      type: Number,
      default: 120,
    },
    expandOpenSectionStyle: {
      type: String,
      default: "",
    },
    expandCloseSectionStyle: {
      type: String,
      default: "",
    },
  },

  computed: {
    previewHeightCss() {
      return {
        height: this.expandDetailsSection ? "100%" : this.previewHeight + "px",
      };
    },
  },
};
</script>

<style scoped>
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.w-full {
  width: 100%;
}
.absolute {
  position: absolute;
}

.bottom-0 {
  bottom: 0px;
}
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.bg-gradient-fade {
  background: linear-gradient(
    187deg,
    rgba(255, 255, 255, 0) -148.96%,
    #fafafa 101.04%
  );
}

.relative {
  position: relative;
}

.overflow-clip {
  overflow: clip;
}
</style>
