import { ref, onMounted, onUnmounted } from 'vue';

export function useViewport() {
  const width = ref(0);
  const height = ref(0);

  const updateSize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize);
  });

  return {
    width,
    height,
    isMobile: () => width.value < 768,
    isTablet: () => width.value >= 768 && width.value < 1024,
    isDesktop: () => width.value >= 1024,
  };
}