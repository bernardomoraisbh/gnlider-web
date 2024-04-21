import { computed, ref } from "vue";

export function useScreenInfo(){
  const width = ref(window.innerWidth); // Use ref to track screen width

  // Update width on window resize
  window.addEventListener("resize", () => {
    width.value = window.innerWidth;
  });

  // Computed properties based on width
  const isDesktop = computed(() => width.value >= 768);
  const isMobile = computed(() => !isDesktop.value); // Negate desktop for mobile

  const displaySize = computed(() => {
    switch (true){
    case width.value <= 320:
      return 2;
    case width.value <= 375:
      return 2;
    case width.value >= 400 && width.value <= 768:
      return 2;
    case width.value <= 1024:
      return 3;
    default:
      return 6;
    }
  });

  const deviceHeight = computed(() => window.innerHeight);
  const deviceType = computed(() => (isDesktop.value ? "Desktop" : "Mobile"));

  // Less reliable OS detection (consider libraries for accuracy)
  const osVersion = computed(() => {
    if (navigator.userAgent.indexOf("Win") != -1) return "Windows";
    if (navigator.userAgent.indexOf("Mac") != -1) return "Macintosh";
    if (navigator.userAgent.indexOf("Linux") != -1) return "Linux";
    if (navigator.userAgent.indexOf("Android") != -1) return "Android";
    if (navigator.userAgent.indexOf("like Mac") != -1) return "iOS";
    return "Unknown"; // Default for unknown OS
  });

  return {
    isDesktop,
    isMobile,
    displaySize,
    deviceWidth: width, // Expose reactive width for potential customization
    deviceHeight,
    deviceType,
    osVersion,
  };
}
