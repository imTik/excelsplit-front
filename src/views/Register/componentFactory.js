function inputComponent() {
  this.type = 'input';
  this.disabled = false;
  this.text = '输入框';
  this.size = 'middle';
  this.value = '';
};

function buttonComponet() {
  this.type = 'button';
  this.disabled = false;
  this.text = '按钮';
  this.size = 'middle';
  this.value = '';
};

function checkboxComponent() {
  this.type = 'checkbox';
  this.disabled = false;
  this.text = '多选';
  this.size = 'middle';
  this.value = [];
  this.items = [
    {
      label: '选项1',
      value: '1',
    },
    {
      label: '选项2',
      value: '2',
    }
  ]
}

function radioComponent() {
  this.type = 'radio';
  this.disabled = false;
  this.text = '单选';
  this.size = 'middle';
  this.value = '';
}

function selectComponent() {
  this.type = 'select';
  this.disabled = false;
  this.text = '下拉选择';
  this.size = 'middle';
  this.value = '';
}

export function componentFactory(type) {
  switch (type) {
    case 'input':
      return new inputComponent();
    
    case 'button':
      return new buttonComponet();
    
    case 'checkbox':
      return new checkboxComponent();
    
    case 'radio':
      return new radioComponent();
    
    case 'select':
      return new selectComponent();
    
    default:
      return new inputComponent();
  };
};