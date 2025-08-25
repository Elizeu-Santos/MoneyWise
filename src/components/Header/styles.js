import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 180px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const LogoSection = styled.div`
  text-align: left;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: 5px 0 0 0;
  font-weight: 300;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProfilePhotoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
  }
`;

export const DefaultProfilePhoto = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 4px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
  }
`;

export const PhotoUploadButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: #45a049;
    transform: scale(1.1);
  }
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const UserName = styled.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const NameInput = styled.input`
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  color: #333;
  outline: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  }
`;

// Responsividade para dispositivos móveis
export const MobileContainer = styled.div`
  @media (max-width: 768px) {
    ${HeaderContent} {
      flex-direction: column;
      text-align: center;
    }
    
    ${LogoSection} {
      text-align: center;
    }
    
    ${Title} {
      font-size: 2rem;
    }
    
    ${ProfilePhoto}, ${DefaultProfilePhoto} {
      width: 70px;
      height: 70px;
    }
    
    ${PhotoUploadButton} {
      width: 24px;
      height: 24px;
    }
  }
`;
