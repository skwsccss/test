import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import LoginBG from '../login-bg.png';
function Header() {
    return (
        <Container>
            <Row className="h-100">
                <Col className="d-flex">
                    <Card className="m-auto">
                        <CardBody className="p-5 login-card">
                            <h2>Welcome Back!</h2>
                            <small>Please Log in into your account</small>
                            <Form className="login-form">
                                <FormGroup className="text-left">
                                    <Label for="exampleEmail" className="my-2">Your Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="test@email.com"
                                    />
                                </FormGroup>
                                <FormGroup className="text-left my-3">
                                    <Label for="password" className="my-2">Your Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your password"
                                    />
                                </FormGroup>
                                <Button color="primary" className="w-100 my-3">Login</Button>
                                <div className="d-flex align-items-center">
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="checkbox" /> Remember Me
                                        </Label>
                                    </FormGroup>
                                    <Button color="link" className="my-3 float-right">Forgot password?</Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="d-flex">
                    <img src={LoginBG} alt="logo" className="m-auto" />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
