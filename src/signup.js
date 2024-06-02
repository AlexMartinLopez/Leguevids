import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import './signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState(false);
  const navigate = useNavigate(); // Obtener la función de navegación

  const saveUserData = async (userId, email) => {
    try {
      await addDoc(collection(db, 'users'), {
        userId,
        email,
        createdAt: new Date()
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await saveUserData(user.uid, user.email);
      setWelcomeMessage(true);
      setTimeout(() => navigate('/login'), 2000); // Redireccionar a la página de login después de 2 segundos
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="title">Sign Up</h2>
        {error && <p className="error">{error}</p>}
        {welcomeMessage && <p className="welcome-message">Bienvenido a la Grieta Invocador</p>}
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="input"
          />
          <button
            type="submit"
            className="button"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
