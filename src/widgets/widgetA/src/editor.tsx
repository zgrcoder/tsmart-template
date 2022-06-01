import { extractStyles } from '@tcac/cc-sdk';
import { Form, Input } from 'antd';

const Editor: React.FC<any> = observer(props => {
  const { config, ...params } = props;
  const { data } = config;
  const [wrapStyle, restStyle] = extractStyles(data.style, key => /^margin/.test(key));
  const FieldRequired = data.validation.some(v => v.required);

  return (
    <div {...params} style={wrapStyle}>
      <Form autoComplete="off" validateTrigger={false}>
        <Form.Item
          label={data.label}
          colon={false}
          labelCol={{ md: { span: 24 } }}
          labelAlign="left"
          required={FieldRequired}
        >
          {data.src && (
            <div className="label-thumb">
              <img src={data.src} />
            </div>
          )}
          {data.desc && <div className="label-desc">{data.desc}</div>}
          <Form.Item noStyle name={data.label} rules={data.validation} initialValue={data.value}>
            <Input.TextArea
              readOnly
              rows={data.rows}
              placeholder={data.placeholder}
              style={restStyle}
            />
          </Form.Item>
        </Form.Item>
      </Form>
      {props.children}
    </div>
  );
});

export default Editor;
