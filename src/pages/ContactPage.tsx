import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #0056b3;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
`;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const ContactForm = styled.form`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
  }
`;

const SubmitButton = styled.button`
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #003d82;
  }
  
  &:disabled {
    background-color: #88aed0;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const Map = styled.div`
  margin-top: 3rem;
  height: 400px;
  background-color: #e0e0e0;
  border-radius: 8px;
`;

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your server
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      // For demonstration, we'll just simulate a successful submission
      setFormStatus('success');
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after a few seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <Container>
      <PageTitle>{t('contact.title')}</PageTitle>
      
      <ContactGrid>
        <ContactInfo>
          <InfoTitle>{t('contact.contactInfo.title')}</InfoTitle>
          
          <InfoItem>
            <InfoLabel>{t('contact.contactInfo.address.label')}</InfoLabel>
            <InfoText>{t('contact.contactInfo.address.value')}</InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>{t('contact.contactInfo.email.label')}</InfoLabel>
            <InfoText>{t('contact.contactInfo.email.value')}</InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>{t('contact.contactInfo.phone.label')}</InfoLabel>
            <InfoText>{t('contact.contactInfo.phone.value')}</InfoText>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>{t('contact.contactInfo.hours.label')}</InfoLabel>
            <InfoText>{t('contact.contactInfo.hours.weekdays')}</InfoText>
            <InfoText>{t('contact.contactInfo.hours.weekend')}</InfoText>
          </InfoItem>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          {formStatus === 'success' && (
            <SuccessMessage>
              {t('contact.form.successMessage')}
            </SuccessMessage>
          )}
          
          {formStatus === 'error' && (
            <ErrorMessage>
              {t('contact.form.errorMessage')}
            </ErrorMessage>
          )}
          
          <FormGroup>
            <Label htmlFor="name">{t('contact.form.name.label')}</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">{t('contact.form.email.label')}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">{t('contact.form.subject.label')}</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">{t('contact.form.message.label')}</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <SubmitButton type="submit" disabled={formStatus === 'submitting'}>
            {formStatus === 'submitting' ? t('contact.form.sending') : t('contact.form.sendButton')}
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
      
      <Map>
        {/* {t('contact.map.comment')} */}
      </Map>
    </Container>
  );
};

export default ContactPage;
