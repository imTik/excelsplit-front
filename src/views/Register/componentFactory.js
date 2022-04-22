function InputComponent() {
  BasicComponent.apply(this);
  this.type = 'input';
  this.text = '输入框';
};
Extend(InputComponent, BasicComponent);

function ButtonComponet() {
  BasicComponent.apply(this);
  this.type = 'button';
  this.text = '按钮';
};
Extend(ButtonComponet, BasicComponent);

function CheckboxComponent() {
  BasicComponent.apply(this);
  this.type = 'checkbox';
  this.text = '多选';
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
Extend(CheckboxComponent, BasicComponent);

function RadioComponent() {
  BasicComponent.apply(this);
  this.type = 'radio';
  this.text = '单选';
}
Extend(RadioComponent, BasicComponent);

function selectComponent() {
  BasicComponent.apply(this);
  this.type = 'select';
  this.text = '下拉选择';
}
Extend(selectComponent, BasicComponent);
console.log(selectComponent.prototype);

selectComponent.prototype.getType = function () {
  console.log('hahaha');
}

export function componentFactory(type) {
  switch (type) {
    case 'input':
      return new InputComponent();

    case 'button':
      return new ButtonComponet();

    case 'checkbox':
      return new CheckboxComponent();

    case 'radio':
      return new RadioComponent();

    case 'select':
      return new selectComponent();

    default:
      return new InputComponent();
  };
};

function BasicComponent() {
  this.type = '';
  this.text = '';
  this.value = '';
  this.disabled = false;
  this.size = 'middle';
};

BasicComponent.prototype.getType = function () {
  console.log(this.type);
  return this.type;
}

// child-子类 parent-父类
function Extend(child, parent) {
  let F = function () { };
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
};