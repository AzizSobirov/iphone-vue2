<template>
  <div class="screen" @keydown="handleKeyDown" tabindex="0">
    <div class="dialer">
      <div class="display">
        <input
          type="text"
          v-model="maskedPhoneNumber"
          :placeholder="phonePlaceholder"
          class="phone-display"
          readonly
        />
        <button @click="addNumber" class="add-number">Add Number</button>
      </div>

      <div class="keypad">
        <div v-for="row in keypad" :key="row[0].value" class="row">
          <button
            v-for="key in row"
            :key="key.value"
            class="key"
            @click="appendNumber(key.value)"
          >
            <span class="number">{{ key.value }}</span>
            <span class="letters">{{ key.letters }}</span>
          </button>
        </div>

        <div class="row">
          <div class="key"></div>
          <button class="call key" @click="callNumber">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2186 15C11.6086 15 10.7517 14.7793 9.46861 14.0625C7.9083 13.1875 6.70142 12.3796 5.14955 10.8318C3.6533 9.33652 2.92517 8.36839 1.90611 6.51402C0.754861 4.42027 0.951111 3.32277 1.17049 2.8537C1.43174 2.29308 1.81736 1.95777 2.3158 1.62495C2.59891 1.43947 2.89851 1.28046 3.2108 1.14995C3.24205 1.13652 3.27111 1.1237 3.29705 1.11214C3.45174 1.04245 3.68611 0.937142 3.98299 1.04964C4.18111 1.12402 4.35799 1.2762 4.63486 1.54964C5.20267 2.10964 5.97861 3.35683 6.26486 3.96933C6.45705 4.38214 6.58424 4.65464 6.58455 4.96027C6.58455 5.31808 6.40455 5.59402 6.18611 5.89183C6.14517 5.94777 6.10455 6.0012 6.06517 6.05308C5.82736 6.36558 5.77517 6.45589 5.80955 6.61714C5.87924 6.9412 6.39892 7.90589 7.25299 8.75808C8.10705 9.61027 9.04392 10.0971 9.36924 10.1665C9.53736 10.2025 9.62955 10.1481 9.95205 9.90183C9.9983 9.86652 10.0458 9.82995 10.0955 9.79339C10.4286 9.54558 10.6917 9.37027 11.0411 9.37027H11.043C11.347 9.37027 11.6074 9.50214 12.0386 9.71964C12.6011 10.0034 13.8858 10.7693 14.4492 11.3378C14.7233 11.614 14.8761 11.7903 14.9508 11.9881C15.0633 12.2859 14.9574 12.5193 14.8883 12.6756C14.8767 12.7015 14.8639 12.73 14.8505 12.7615C14.7189 13.0733 14.559 13.3722 14.3727 13.6546C14.0405 14.1515 13.7039 14.5362 13.142 14.7978C12.8535 14.9343 12.5378 15.0034 12.2186 15Z"
                fill="white"
              />
            </svg>
          </button>
          <button class="erase key" @click="clearNumber">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1966 0.656982H6.22065C5.35849 0.656982 4.54399 1.05254 4.01091 1.73015L1.17897 5.32986C1.03077 5.51824 0.950195 5.75097 0.950195 5.99066C0.950195 6.24475 1.04072 6.49052 1.20553 6.6839L4.01327 9.97831C4.54746 10.6051 5.3296 10.9662 6.15313 10.9662H12.1966C13.7494 10.9662 15.0082 9.70737 15.0082 8.15457V3.46858C15.0082 1.91578 13.7494 0.656982 12.1966 0.656982Z"
                fill="currentColor"
                fill-opacity="0.18"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.85357 6.47427L11.8652 8.4859L12.5279 7.8232L10.5163 5.81157L12.5279 3.79991L11.8652 3.13721L9.85357 5.14888L7.8419 3.13721L7.1792 3.79991L9.19087 5.81157L7.17924 7.8232L7.84194 8.4859L9.85357 6.47427Z"
                fill="currentColor"
                fill-opacity="0.24"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.85357 6.47427L11.8652 8.4859L12.5279 7.8232L10.5163 5.81157L12.5279 3.79991L11.8652 3.13721L9.85357 5.14888L7.8419 3.13721L7.1792 3.79991L9.19087 5.81157L7.17924 7.8232L7.84194 8.4859L9.85357 6.47427Z"
                fill="currentColor"
                fill-opacity="0.24"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { playSound } from "@/composables/useMe";

export default {
  data() {
    return {
      phoneNumber: "",
      maskedPhoneNumber: "",
      keypad: [
        [
          { value: "1", letters: "" },
          { value: "2", letters: "ABC" },
          { value: "3", letters: "DEF" },
        ],
        [
          { value: "4", letters: "GHI" },
          { value: "5", letters: "JKL" },
          { value: "6", letters: "MNO" },
        ],
        [
          { value: "7", letters: "PQRS" },
          { value: "8", letters: "TUV" },
          { value: "9", letters: "WXYZ" },
        ],
        [
          { value: "*", letters: "" },
          { value: "0", letters: "+" },
          { value: "#", letters: "" },
        ],
      ],
      phonePlaceholder: "Enter number",
    };
  },
  watch: {
    phoneNumber(newVal) {
      this.maskedPhoneNumber = this.applyPhoneMask(newVal);
    },
  },
  methods: {
    ...mapMutations(["callPhone"]),
    appendNumber(value) {
      this.phoneNumber += value;
      playSound("dial");
    },
    clearNumber() {
      this.phoneNumber = this.phoneNumber.slice(0, -1);
    },
    callNumber() {
      this.callPhone(this.phoneNumber);
    },
    addNumber() {
      this.$emit("saveContact", this.phoneNumber);
    },
    applyPhoneMask(number) {
      const cleanNumber = number.replace(/\D/g, "");
      const match = cleanNumber.match(/^(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/);
      if (!match) return number;
      return [
        match[1] ? `(${match[1]}` : "",
        match[2] ? `) ${match[2]}` : "",
        match[3] ? `-${match[3]}` : "",
        match[4] ? `-${match[4]}` : "",
      ]
        .join("")
        .trim();
    },
    handleKeyDown(event) {
      const key = event.key;

      // Allow numbers
      if (!isNaN(key) && key !== " ") {
        this.appendNumber(key);
      }

      // Handle special keys
      switch (key) {
        case "Backspace":
          this.clearNumber();
          break;
        case "Enter":
          this.callNumber();
          break;
        case "+":
          this.appendNumber("+");
          break;
        case "#":
          this.appendNumber("#");
          break;
        case "*":
          this.appendNumber("*");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.screen {
  overflow: hidden;
}

.dialer {
  padding-top: rem(20);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(24);

  .display {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(8);

    .phone-display {
      width: 100%;
      font-size: rem(24);
      font-weight: 500;
      text-align: center;
    }

    .add-number {
      color: var(--primary);
      font-size: rem(13);
      cursor: pointer;
    }
  }

  .keypad {
    width: 100%;
    display: grid;
    gap: rem(14);

    .row {
      display: flex;
      justify-content: center;
      gap: rem(14);

      &:last-child .key:first-child {
        visibility: hidden;
      }
    }

    .key {
      height: rem(48);
      width: rem(48);
      text-align: center;
      background-color: var(--foreground-light);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background var(--transition-ease);

      &:hover {
        background-color: #ababab;
      }
    }

    .number {
      font-size: rem(22);
      line-height: 1;
    }

    .letters {
      font-size: rem(8);
      letter-spacing: rem(2.5);
    }

    .call {
      background: #31c75c;

      svg {
        width: rem(14);
        height: rem(14);
      }

      &:hover {
        background: #49da6d !important;
      }
    }

    .erase {
      background: transparent !important;

      svg {
        width: rem(16);
        height: rem(12);
      }
    }
  }
}

.dark .dialer {
  .key:hover {
    background-color: #666666;
  }

  .erase svg path {
    fill: #fff;
    fill-opacity: 1;

    &:nth-child(3) {
      fill: var(--background);
    }
  }
}
</style>
