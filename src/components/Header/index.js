import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { FaUser, FaCamera } from "react-icons/fa";
import { useTranslation } from "../../i18n";

const Header = () => {
    const [userName, setUserName] = useState("");
    const [userPhoto, setUserPhoto] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const savedName = localStorage.getItem("userName") || "";
        const savedPhoto = localStorage.getItem("userPhoto") || "";
        setUserName(savedName);
        setUserPhoto(savedPhoto);
    }, []);

    const handleNameSave = () => {
        if (userName.trim()) {
            localStorage.setItem("userName", userName);
            setIsEditing(false);
        }
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const photoData = e.target.result;
                setUserPhoto(photoData);
                localStorage.setItem("userPhoto", photoData);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleNameSave();
        }
    };

    const { t, setLocale } = useTranslation();

    return (
        <C.Container>
            <C.HeaderContent>
                <C.UserSection>
                    <C.ProfileContainer>
                        <C.ProfilePhotoContainer>
                            {userPhoto ? (
                                <C.ProfilePhoto src={userPhoto} alt="Foto do usuário" />
                            ) : (
                                <C.DefaultProfilePhoto>
                                    <FaUser size={40} />
                                </C.DefaultProfilePhoto>
                            )}
                            <C.PhotoUploadButton htmlFor="photo-upload">
                                <FaCamera size={16} />
                            </C.PhotoUploadButton>
                            <input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                style={{ display: 'none' }}
                            />
                        </C.ProfilePhotoContainer>
                        
                        <C.UserInfo>
                            {isEditing ? (
                                <C.NameInput
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    onBlur={handleNameSave}
                                    placeholder={t("header.nameInputPlaceholder")}
                                    autoFocus
                                />
                            ) : (
                                <C.UserName onClick={() => setIsEditing(true)}>
                                    {userName || t("header.namePlaceholder")}
                                </C.UserName>
                            )}
                        </C.UserInfo>
                    </C.ProfileContainer>
                </C.UserSection>
                
                <C.LogoSection>
                    <C.Title>{t("header.title")}</C.Title>
                    <C.Subtitle>{t("header.subtitle")}</C.Subtitle>
                </C.LogoSection>

                <C.ActionsRight>
                    <C.LangButton onClick={() => setLocale("pt-BR")} title="Português (Brasil)">🇧🇷</C.LangButton>
                    <C.LangButton onClick={() => setLocale("en")} title="English (US)">🇺🇸</C.LangButton>
                    <C.LangButton onClick={() => setLocale("es")} title="Español">🇪🇸</C.LangButton>
                    <C.LangButton onClick={() => setLocale("fr")} title="Français">🇫🇷</C.LangButton>
                </C.ActionsRight>
            </C.HeaderContent>
        </C.Container>
    );
};

export default Header;
