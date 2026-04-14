"use client";

import React, { useState } from 'react';
import { Bot as BotIcon, X, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

// Define tus preguntas y respuestas aquí
const faqs = [
  {
    question: '¿Cuáles son los tiempos de envío?',
    answer: 'Los envíos a ciudades principales tardan de 2 a 3 días hábiles. Para zonas extendidas, puede tomar hasta 5 días hábiles.',
  },
  {
    question: '¿Puedo personalizar los hologramas?',
    answer: '¡Claro! Ofrecemos un servicio completo de diseño y fabricación de hologramas personalizados. Contáctanos para una cotización.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias (SPEI), tarjetas de crédito/débito y pagos en OXXO.',
  },
];

// Número de WhatsApp al que se enviará el mensaje
const WHATSAPP_NUMBER = '5215512345678'; // Reemplaza con tu número de WhatsApp
const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir asesoría de un agente de Datapad.';

export default function Bot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 z-50"
        aria-label="Abrir chat"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Ventana del Chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-[#1C2939] text-white p-4 rounded-t-lg flex items-center">
            <BotIcon className="mr-3" />
            <h3 className="font-bold text-lg">Asistente Virtual Datapad</h3>
          </div>

          {/* Contenido */}
          <div className="p-4 h-80 overflow-y-auto">
            <p className="text-sm text-gray-600 mb-4">Hola, ¿cómo podemos ayudarte? Aquí tienes algunas preguntas frecuentes:</p>
            
            {/* Acordeón de Preguntas */}
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex justify-between items-center text-left py-3 font-semibold text-gray-800"
                  >
                    <span>{faq.question}</span>
                    {activeQuestion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {activeQuestion === index && (
                    <div className="pb-3 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer para Contacto */}
          <div className="p-4 bg-gray-50 rounded-b-lg border-t">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Contactar con un Agente
            </a>
          </div>
        </div>
      )}
    </>
  );
}