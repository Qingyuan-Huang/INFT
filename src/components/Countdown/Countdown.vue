<template>
  <div class="countdown">
    <span class="time">{{ formatTime() }}</span>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      required: true,
    },
    autoStart: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      remainingTime: this.time,
      intervalId: null,
    };
  },
  created() {
    if (this.autoStart) {
      this.start();
    }
  },
  methods: {
    start() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.remainingTime--;
          if (this.remainingTime <= 0) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.$emit("finished");
          }
        }, 1000);
      }
    },
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    reset() {
      this.remainingTime = this.time;
      this.stop();
      if (this.autoStart) {
        this.start();
      }
    },
    formatTime() {
      let minutes = Math.floor(this.remainingTime / 60);
      let seconds = this.remainingTime % 60;
      return `${seconds
        .toString()
        .padStart(2, "0")}`;
    },
  },
  watch: {
    time(newVal) {
      this.remainingTime = newVal;
      this.reset();
    },
  },
  beforeDestroy() {
    this.stop();
  },
};
</script>

<style>
.countdown {
  display: inline-block;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #f2f2f2;
}

.time {
  font-size: 16px;
  font-weight: bold;
}
</style>
