<template>
  <div class="statusbar">
    <div class="left">
      <div class="time">{{ currentTime }}</div>
      <div class="notifications">
        <div class="notifications-item">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.05291 10.6817L9.64098 1.35583L1.35131 5.39241H6.05291V10.6817Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="camera"></div>
    <div class="right">
      <div class="signal">
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.25"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9942 2.35461H12.7048C13.0972 2.35461 13.4153 2.72576 13.4153 3.18358V9.81531C13.4153 10.2731 13.0972 10.6443 12.7048 10.6443H11.9942C11.6018 10.6443 11.2837 10.2731 11.2837 9.81531V3.18358C11.2837 2.72576 11.6018 2.35461 11.9942 2.35461Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.496 4.01306H8.78546C8.39304 4.01306 8.07492 4.3842 8.07492 4.84203V9.81583C8.07492 10.2737 8.39304 10.6448 8.78546 10.6448H9.496C9.88843 10.6448 10.2065 10.2737 10.2065 9.81583V4.84203C10.2065 4.3842 9.88843 4.01306 9.496 4.01306ZM5.59262 5.671H6.30316C6.69558 5.671 7.0137 6.04214 7.0137 6.49996V9.81583C7.0137 10.2737 6.69558 10.6448 6.30316 10.6448H5.59262C5.2002 10.6448 4.88208 10.2737 4.88208 9.81583V6.49996C4.88208 6.04214 5.2002 5.671 5.59262 5.671ZM2.39278 6.91408H3.10332C3.49574 6.91408 3.81386 7.28522 3.81386 7.74305V9.81547C3.81386 10.2733 3.49574 10.6444 3.10332 10.6444H2.39278C2.00036 10.6444 1.68224 10.2733 1.68224 9.81547V7.74305C1.68224 7.28522 2.00036 6.91408 2.39278 6.91408Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div class="wifi">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6662 4.44629C10.1876 3.09311 8.31963 2.35486 6.36627 2.35486C4.40713 2.35486 2.53398 3.09752 1.05359 4.45802L0.927862 4.57356C0.826191 4.66699 0.820355 4.83309 0.915183 4.9344L1.7871 5.86601C1.87173 5.95643 2.00706 5.9626 2.09859 5.88021L2.20661 5.78298C3.37247 4.73352 4.83624 4.1623 6.36627 4.1623C7.8911 4.1623 9.35019 4.72961 10.5143 5.77255L10.6223 5.86928C10.7138 5.95131 10.8489 5.94498 10.9334 5.85471L11.8054 4.92297C11.9004 4.82151 11.8944 4.65514 11.7924 4.5618L11.6662 4.44629ZM6.36928 5.2316C7.60011 5.2316 8.78188 5.66908 9.74459 6.47925L9.88064 6.59374C9.98911 6.68503 9.99864 6.85703 9.90101 6.96135L9.02612 7.89612C8.9452 7.98258 8.81716 7.99251 8.7254 7.91945L8.61875 7.83452C7.96854 7.31677 7.1845 7.03904 6.36928 7.03904C5.54903 7.03904 4.76041 7.32022 4.10804 7.84392L4.00128 7.92962C3.90952 8.00328 3.78101 7.99359 3.69985 7.90687L2.82528 6.97244C2.72786 6.86834 2.73711 6.69677 2.84508 6.60532L2.98036 6.49073C3.94536 5.67334 5.13251 5.2316 6.36928 5.2316ZM6.36692 8.10725C6.8617 8.10725 7.34246 8.24655 7.76608 8.51218L7.93772 8.6198C8.06784 8.70139 8.09072 8.89234 7.98404 9.00633L6.51858 10.5721C6.42857 10.6683 6.28263 10.6683 6.19261 10.5721L4.73657 9.0164C4.63036 8.90291 4.6525 8.71292 4.78152 8.63073L4.95123 8.52262C5.37873 8.25027 5.8656 8.10725 6.36692 8.10725Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div class="battery">
        <svg
          width="25"
          height="13"
          viewBox="0 0 25 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.35"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.23929 1.94116H18.5131C19.5503 1.94116 20.3912 2.86901 20.3912 4.01358V9.40186C20.3912 10.5464 19.5503 11.4743 18.5131 11.4743H4.23929C3.20203 11.4743 2.36116 10.5464 2.36116 9.40186V4.01358C2.36116 2.86901 3.20203 1.94116 4.23929 1.94116ZM4.23924 2.77003C3.61688 2.77003 3.11236 3.32675 3.11236 4.01348V9.40177C3.11236 10.0885 3.61688 10.6452 4.23924 10.6452H18.513C19.1354 10.6452 19.6399 10.0885 19.6399 9.40177V4.01348C19.6399 3.32675 19.1354 2.77003 18.513 2.77003H4.23924Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.1418 4.67517C21.8107 5.0525 22.2687 5.82037 22.2687 6.70626C22.2687 7.59215 21.8107 8.36002 21.1418 8.73735V4.67517Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.61459 3.59851H18.1371C18.552 3.59851 18.8884 3.96965 18.8884 4.42748V8.98679C18.8884 9.44462 18.552 9.81576 18.1371 9.81576H4.61459C4.19969 9.81576 3.86334 9.44462 3.86334 8.98679V4.42748C3.86334 3.96965 4.19969 3.59851 4.61459 3.59851Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statusbar",
  data() {
    return {
      currentTime: "",
    };
  },
  computed: {},
  mounted() {
    this.getTime();

    setInterval(() => {
      this.getTime();
    }, 60000);
  },
  methods: {
    getTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      this.currentTime = hours + ":" + minutes;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.statusbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 0 em(24);
  height: em(30);
  width: 100%;
  color: var(--foreground);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: em(5);
}

.left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: em(4);

  .time {
    font-size: em(12);
    font-weight: 500;
  }
}

.notifications {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: em(3);

  .notifications-item {
    width: em(12);
    height: em(12);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-bottom: em(1);
      width: 100%;
      height: 100%;
    }
  }
}

.camera {
  position: absolute;
  top: em(5);
  left: 50%;
  transform: translateX(-50%);
  width: em(74);
  height: em(22);
  background: #000;
  border-radius: 9999px;
  pointer-events: none;
}

.right {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: em(2);

  .signal {
    width: em(15);
    height: em(12);
  }

  .wifi {
    width: em(12);
    height: em(12);
  }

  .battery {
    width: em(23);
    height: em(12);
  }

  .signal,
  .wifi,
  .battery {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
