import { ref } from 'vue';
import SESSION from '../../utils/Session';

export function getRemember() {
  let remember = ref(false);

  let sessionRemember = SESSION.get('EXCEL_REMEMBER', remember.value);
  if (sessionRemember !== null) {
    remember.value = sessionRemember;
  }

  return remember;
}
