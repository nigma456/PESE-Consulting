import { useState } from 'react'
import { Form, Input, Button, Select, message } from 'antd'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons'

const { TextArea } = Input

const projectTypes = [
  'Solar Mounting System Design',
  'Wind Load Analysis (CFD)',
  'Structural Analysis (FEA)',
  'Seismic Engineering',
  'Snow Load Engineering',
  'Hurricane Zone Engineering',
  'Full Permit Package (up to 20 kW)',
  'Commercial Structural Service (above 20 kW)',
  'Engineer of Record & Sealing',
  'Existing-Building Capacity Review',
  'Field Inspection & Special Structures',
  'Steel Connection Design',
  'Residential Structural Development',
  'General Inquiry',
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maeyrzzw'

export default function Contact() {
  const [form] = Form.useForm()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (values: Record<string, string>) => {
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (res.ok) {
        message.success('Thank you for your inquiry. We will respond ASAP.')
        form.resetFields()
      } else {
        message.error('Submission failed. Please email us directly at info@peseconsulting.com')
      }
    } catch {
      message.error('Network error. Please email us directly at info@peseconsulting.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Engineering Solution Services</h3>
            <p>
              Contact PESE Consulting for professional engineering design and analysis
              services for your project.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MailOutlined />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:info@peseconsulting.com">info@peseconsulting.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <PhoneOutlined />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+18005550100">+1(341)-356-2616</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <EnvironmentOutlined />
                </div>
                <div>
                  <span className="contact-label">Service Area</span>
                  <span>30+ States Nationwide</span>
                </div>
              </div>
            </div>

          </div>
          <div className="contact-form-wrap">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="contact-form"
            >
              <div className="form-row">
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="John Smith" size="large" />
                </Form.Item>
                <Form.Item
                  name="company"
                  label="Company"
                >
                  <Input placeholder="Company name" size="large" />
                </Form.Item>
              </div>
              <div className="form-row">
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email format' }]}
                >
                  <Input placeholder="you@company.com" size="large" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone"
                >
                  <Input placeholder="(555) 123-4567" size="large" />
                </Form.Item>
              </div>
              <Form.Item
                name="projectType"
                label="Project Type"
              >
                <Select
                  placeholder="Select a service"
                  size="large"
                  options={projectTypes.map((t) => ({ value: t, label: t }))}
                />
              </Form.Item>
              <Form.Item
                name="message"
                label="Project Details"
                rules={[{ required: true, message: 'Please describe your project' }]}
              >
                <TextArea
                  rows={5}
                  placeholder="Describe your project location, system size, roof type, and any special requirements..."
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={submitting}
                  icon={<SendOutlined />}
                  iconPosition="end"
                >
                  Send Project Inquiry
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
