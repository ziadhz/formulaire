import React, { useState } from 'react';
import InputField from './InputField';

interface PortfolioData {
  nom: string;
  adresse: string;
  email: string;
  telephone: string;
  bio: string;
  education: string;
  experience: string;
  competences: string;
  projets: string;
}

const PortfolioForm: React.FC = () => {
  const [formData, setFormData] = useState<PortfolioData>({
    nom: '',
    adresse: '',
    email: '',
    telephone: '',
    bio: '',
    education: '',
    experience: '',
    competences: '',
    projets: '',
  });

  const [errors, setErrors] = useState<Partial<PortfolioData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Partial<PortfolioData> = {};

    if (!formData.nom) {
      validationErrors.nom = "Le nom est requis";
    }
    if (!formData.email) {
      validationErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "L'email est invalide";
    }
    if (!formData.telephone) {
      validationErrors.telephone = "Le téléphone est requis";
    } else if (!/^\d+$/.test(formData.telephone)) {
      validationErrors.telephone = "Le téléphone est invalide";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-2xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Formulaire de Portfolio</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <InputField
          label="Nom :"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          error={errors.nom}
        />
        <InputField
          label="Adresse :"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
        />
        <InputField
          label="Email :"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Téléphone :"
          name="telephone"
          type="tel"
          value={formData.telephone}
          onChange={handleChange}
          error={errors.telephone}
        />
        <div className="mb-6">
          <label className="block text-gray-900 text-lg font-semibold">Bio :</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out bg-white"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 text-lg font-semibold">Éducation :</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out bg-white"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 text-lg font-semibold">Expérience :</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out bg-white"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 text-lg font-semibold">Compétences :</label>
          <textarea
            name="competences"
            value={formData.competences}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out bg-white"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 text-lg font-semibold">Projets :</label>
          <textarea
            name="projets"
            value={formData.projets}
            onChange={handleChange}
            className="mt-2 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out bg-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:via-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default PortfolioForm;
