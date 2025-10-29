"use client";
import React, { useState, useEffect, useCallback } from "react";

interface PreRegistrationFormProps {
  onClose: () => void;
  selectedPlan?: string;
}

interface FormData {
  fullName: string;
  dob: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  planType: string;
  howHeard: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

interface ViaCepResponse {
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}


export default function PreRegistrationForm({
  onClose, selectedPlan
}: PreRegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
  fullName: "",
  dob: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  planType: selectedPlan || "",
  howHeard: "",
});


  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const maskCPF = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  const maskPhone = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  const maskCEP = (value: string) =>
    value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Nome completo é obrigatório.";
    if (!formData.street.trim()) newErrors.street = "Rua é obrigatória.";
    if (!formData.number.trim()) newErrors.number = "Número é obrigatório.";
    if (!formData.neighborhood.trim())
      newErrors.neighborhood = "Bairro é obrigatório.";
    if (!formData.city.trim()) newErrors.city = "Cidade é obrigatória.";
    if (!formData.state.trim()) newErrors.state = "Estado é obrigatório.";
    if (!formData.planType) newErrors.planType = "Selecione um plano.";
    if (!formData.howHeard) newErrors.howHeard = "Selecione como nos conheceu.";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === "cpf") processedValue = maskCPF(value);
    else if (name === "phone") processedValue = maskPhone(value);
    else if (name === "cep") processedValue = maskCEP(value);
    setFormData((prev: any) => ({ ...prev, [name]: processedValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  validateForm();

  if (Object.keys(errors).length === 0 && isFormValid) {
    const message = `
*Novo Pré-Cadastro Fortlink!*

 *Nome:* ${formData.fullName}
 *Endereço:* ${formData.street}, ${formData.number}${formData.complement ? ` - ${formData.complement}` : ""}
 *Bairro:* ${formData.neighborhood}
 *Cidade:* ${formData.city} - ${formData.state}
 *Plano:* ${formData.planType === "basico" ? "Plano Básico - 100 Mega" :
              formData.planType === "intermediario" ? "Plano Intermediário - 300 Mega" :
              formData.planType === "premium" ? "Plano Premium - 500 Mega" :
              formData.planType === "gamer" ? "Plano Gamer - 1 Giga" : ""}
*Como nos conheceu:* ${
      formData.howHeard === "indicacao" ? "Indicação de amigo" :
      formData.howHeard === "redes_sociais" ? "Redes Sociais" :
      formData.howHeard === "google" ? "Busca no Google" : "Outro"
    }

Enviado via site oficial da *Fortlink*.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "551334228135"; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitted(true);
  } else {
    const firstErrorField = document.querySelector(
      `[name="${Object.keys(errors)[0]}"]`
    );
    if (firstErrorField instanceof HTMLElement) {
      firstErrorField.focus();
    }
  }
};

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#00D109]">Obrigado!</h2>
        <p className="text-gray-300 mb-6">
          Seu pré-cadastro foi enviado com sucesso. Entraremos em contato em
          breve para finalizar.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-[#00D109] text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300"
        >
          Fechar
        </button>
      </div>
    );
  }

  const getInputClasses = (fieldName: keyof FormData) =>
    `w-full bg-black/30 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
      errors[fieldName]
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-600 focus:ring-[#00D109] focus:border-[#00D109]"
    }`;
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#23c12b] to-[#00D109]">
        Pré-Cadastro Completo
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Preencha os dados abaixo para agilizar sua contratação.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-h-[70vh] overflow-y-auto pr-4 -mr-4"
        noValidate
      >
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-[#23c12b] border-b border-[#00D109]/30 pb-2 mb-4 w-full">
            Informações para a Instalação
          </legend>
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Nome Completo
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={getInputClasses("fullName")}
              placeholder="Seu nome completo"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="street" className={labelClasses}>
                Rua / Avenida
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
                className={getInputClasses("street")}
                placeholder="Nome da sua rua"
              />
              {errors.street && (
                <p className="text-red-500 text-xs mt-1">{errors.street}</p>
              )}
            </div>
            <div>
              <label htmlFor="number" className={labelClasses}>
                Número
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className={getInputClasses("number")}
                placeholder="123"
              />
              {errors.number && (
                <p className="text-red-500 text-xs mt-1">{errors.number}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="complement" className={labelClasses}>
                Complemento <span className="text-gray-500">(Opcional)</span>
              </label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={formData.complement}
                onChange={handleChange}
                className={getInputClasses("complement")}
                placeholder="Apto, Bloco, Casa"
              />
            </div>
            <div>
              <label htmlFor="neighborhood" className={labelClasses}>
                Bairro
              </label>
              <input
                type="text"
                id="neighborhood"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                required
                className={getInputClasses("neighborhood")}
                placeholder="Nome do bairro"
              />
              {errors.neighborhood && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.neighborhood}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className={labelClasses}>
                Cidade
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className={getInputClasses("city")}
                placeholder="Sua cidade"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>
            <div>
              <label htmlFor="state" className={labelClasses}>
                Estado
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className={getInputClasses("state")}
                placeholder="UF"
              />
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">{errors.state}</p>
              )}
            </div>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-[#23c12b] border-b border-[#00D109]/30 pb-2 mb-4 w-full">
            Plano Desejado
          </legend>
          <div>
            <label htmlFor="planType" className={labelClasses}>
              Tipo de Plano
            </label>
            <select
              id="planType"
              name="planType"
              value={formData.planType}
              onChange={handleChange}
              required
              className={getInputClasses("planType")}
            >
              <option value="" disabled>
                Selecione um plano
              </option>
              <option value="basico">Plano Básico - 100 Mega</option>
              <option value="intermediario">
                Plano Intermediário - 300 Mega
              </option>
              <option value="premium">Plano Premium - 500 Mega</option>
              <option value="gamer">Plano Gamer - 1 Giga</option>
            </select>
            {errors.planType && (
              <p className="text-red-500 text-xs mt-1">{errors.planType}</p>
            )}
          </div>
          <div>
            <label htmlFor="howHeard" className={labelClasses}>
              Como nos conheceu?
            </label>
            <select
              id="howHeard"
              name="howHeard"
              value={formData.howHeard}
              onChange={handleChange}
              required
              className={getInputClasses("howHeard")}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="indicacao">Indicação de amigo</option>
              <option value="redes_sociais">Redes Sociais</option>
              <option value="google">Busca no Google</option>
              <option value="outro">Outro</option>
            </select>
            {errors.howHeard && (
              <p className="text-red-500 text-xs mt-1">{errors.howHeard}</p>
            )}
          </div>
        </fieldset>

        <div className="pt-4">
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-[#00D109] text-black font-bold py-3 px-4 rounded-lg transform transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100 hover:enabled:bg-opacity-90 hover:enabled:scale-105"
          >
            Enviar Pré-Cadastro
          </button>
        </div>
      </form>
    </div>
  );
}
