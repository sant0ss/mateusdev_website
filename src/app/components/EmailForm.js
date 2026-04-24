import React, { useState } from "react";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";
import emailjs from "@emailjs/browser";

const fields = [
  { id: "name",    label: "Nome",    placeholder: "Seu nome",            type: "input",    inputType: "text"  },
  { id: "email",   label: "E-mail",  placeholder: "seu@email.com",       type: "input",    inputType: "email" },
  { id: "message", label: "Projeto", placeholder: "Descreva seu projeto…", type: "textarea"                   },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim())
    errors.name = "Campo obrigatório";
  if (!values.email.trim())
    errors.email = "Campo obrigatório";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "E-mail inválido — verifique o formato";
  if (!values.message.trim())
    errors.message = "Campo obrigatório";
  else if (values.message.trim().length < 20)
    errors.message = "Mínimo de 20 caracteres";
  return errors;
}

export default function EmailForm() {
  const [values, setValues]       = useState({ name: "", email: "", message: "" });
  const [touched, setTouched]     = useState({ name: false, email: false, message: false });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"

  const errors = validate(values);

  function handleChange(id, value) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function handleBlur(id) {
    setTouched((prev) => ({ ...prev, [id]: true }));
  }

  function handleReset() {
    setValues({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    setSubmitStatus(null);
  }

  async function sendEmail(e) {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: values.name,
      email:     values.email,
      message:   values.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      setValues({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  }

  /* ── Tela de sucesso ── */
  if (submitStatus === "success") {
    return (
      <div className="flex flex-col gap-4">
        <div
          className="flex items-start gap-4 p-5"
          style={{ background: "rgba(99,153,34,0.08)", borderLeft: "3px solid #639922" }}
        >
          <div
            className="flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{
              width: 24, height: 24, borderRadius: "50%",
              background: "#3B6D11", color: "#C0DD97",
              fontSize: 12, fontWeight: 700,
            }}
          >
            ✓
          </div>
          <div>
            <p className=" text-[13px] mb-1" style={{ color: "#9a9a90" }}>
              Mensagem enviada com sucesso!
            </p>
            <p className="text-[11px] leading-relaxed" style={{ color: "#9a9a90" }}>
              Recebi seu contato e responderei em até 24h.
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="self-start text-[12px] uppercase tracking-[0.08em] font-bold font-syne py-3 px-6"
          style={{ background: "#1f1f1f", color: "#9a9a90" }}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Erro global (falha no servidor) */}
      {submitStatus === "error" && (
        
        <div
          className="flex items-center gap-3 p-4"
          style={{ border: "1px solid #A32D2D", background: "rgba(226,75,74,0.06)" }}
        >
          <div
            style={{ width: 3, height: 40, background: "#E24B4A", borderRadius: 2, flexShrink: 0 }}
          />
          <p className="text-[12px] leading-relaxed" style={{ color: "#F09595" }}>
            Algo deu errado ao enviar sua mensagem.{" "}
            Tente novamente ou entre em contato pelo{" "}
            <a
              href="mailto:contato@mateussantosdev.com"
              className="underline"
              style={{ color: "#F09595" }}
            >
              e-mail direto
            </a>
            .
          </p>
        </div>
      )}

      <form onSubmit={sendEmail} noValidate className="flex flex-col gap-4">
        {fields.map((field) => {
          const hasError = touched[field.id] && errors[field.id];
          const isOk     = touched[field.id] && !errors[field.id] && values[field.id];

          const baseStyle = {
            background:   hasError ? "rgba(226,75,74,0.06)" : isOk ? "rgba(99,153,34,0.06)" : "rgba(255, 255, 255, 0.04)",
            border:       `1px solid ${hasError ? "#A32D2D" : isOk ? "#3B6D11" : "#1e3a5c"}`,
            transition:   "border-color 0.2s, background 0.2s",
          };

          const sharedProps = {
            value:       values[field.id],
            placeholder: field.placeholder,
            onChange:    (e) => handleChange(field.id, e.target.value),
            onBlur:      () => handleBlur(field.id),
            className:   "py-3.5 px-4 text-[14px] font-mono text-[#f0f0ea] w-full outline-none resize-none",
            style:       baseStyle,
          };

          return (
            <div key={field.id} className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-[0.15em] text-[#9a9a90]">
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea {...sharedProps} rows={5} name={field.id} />
              ) : (
                <input {...sharedProps} type={field.inputType} name={field.id} />
              )}

              {/* Mensagem de erro inline */}
              {hasError && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    style={{ width: 6, height: 6, borderRadius: "50%", background: "#E24B4A", flexShrink: 0 }}
                  />
                  <span className="text-[11px] font-mono" style={{ color: "#F09595" }}>
                    {errors[field.id]}
                  </span>
                </div>
              )}

              {/* Confirmação inline */}
              {isOk && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    style={{ width: 6, height: 6, borderRadius: "50%", background: "#639922", flexShrink: 0 }}
                  />
                  <span className="text-[11px] font-mono" style={{ color: "#97C459" }}>
                    Tudo certo
                  </span>
                </div>
              )}
            </div>
          );
        })}

        <button
          type="submit"
          disabled={isLoading}
          className="form-btn self-start font-bold font-syne text-[13px] uppercase tracking-[0.05em] border-0"
          style={{
            background: isLoading ? "#3a3a32" : "#0a0a0a",
            color:      isLoading ? "#9a9a90" : "#4D9EFF",
            padding:    "14px 32px",
            minWidth:   160,
          }}
        >
          {isLoading ? (
            <BeatLoader color="#4D9EFF" size={6} loading />
          ) : (
            "Enviar mensagem →"
          )}
        </button>
      </form>
    </div>
  );
}