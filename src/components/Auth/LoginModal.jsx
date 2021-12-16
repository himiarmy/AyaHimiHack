import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { useAuth } from "../../contexts/authContext";

const LoginModal = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = useAuth();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Wrong E-mail!",
          },
          
        ]}
      >
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="error-msg">{emailError}</p>

      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="error-msg">{passwordError}</p>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Checkbox>Save my data</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginModal;