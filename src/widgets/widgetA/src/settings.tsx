import { CCBorderRadius, CCGroup, CCImage, CCValidation } from '@tcac/cc-component';
import { Col, Divider, Form, Input, InputNumber, Row } from 'antd';

const labelCol = { md: { span: 24 } };

const Settings: React.FC<any> = observer(props => {
  const { widgetId, data, ...params } = props;

  return (
    <div {...params}>
      <CCGroup title="表单设置">
        <Row gutter={15}>
          <Col span={12}>
            <Form.Item label="标题" colon={false} labelCol={labelCol} labelAlign="left">
              <Input
                placeholder="标题"
                defaultValue={data.label}
                onChange={e => (data.label = e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="默认文本" colon={false} labelCol={labelCol} labelAlign="left">
              <Input
                placeholder="默认文本"
                defaultValue={data.placeholder}
                onChange={e => (data.placeholder = e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <CCImage label="配图" src={data.src} removeable onChange={val => (data.src = val)} />
          </Col>
          <Col span={24}>
            <Form.Item label="提示信息" colon={false} labelCol={labelCol} labelAlign="left">
              <Input
                placeholder="提示信息"
                defaultValue={data.desc}
                onChange={e => (data.desc = e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </CCGroup>
      <Divider />
      <CCGroup title="样式设置">
        <Row gutter={15}>
          <Col span={12}>
            <Form.Item label="行数" colon={false} labelAlign="left">
              <div className="pull-right">
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={data.rows}
                  onChange={rows => (data.rows = rows)}
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <CCBorderRadius css={data.style} />
      </CCGroup>
      <Divider />
      <CCGroup title="校验设置">
        <CCValidation validation={data.validation} />
      </CCGroup>
    </div>
  );
});

export default Settings;
