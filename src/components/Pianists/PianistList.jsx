import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Для запроса данных с бэкенда
import PianistGrid from './PianistGrid';  // Для отображения всех пианистов

function PianistList() {
    const [pianists, setPianists] = useState([]);  // Состояние для хранения пианистов
    const [loading, setLoading] = useState(true);  // Состояние загрузки

    useEffect(() => {
        axios.get(`/api/pianists`)  // Запрос на получение данных о пианистах
            .then(response => {
                setPianists(response.data);  // Обновляем состояние с полученными данными
                setLoading(false);  // Останавливаем индикатор загрузки
            })
            .catch(error => {
                console.error("Ошибка при получении данных о пианистах:", error);
                setLoading(false);
            });
    }, []);  // Запрос выполняется только один раз, при монтировании компонента

    return (
        <div>
            {/* Показываем индикатор загрузки, если данные еще не загружены */}
            {loading ? (
                <div>Загрузка...</div>
            ) : (
                <PianistGrid pianists={pianists} />  // Передаем пианистов в компонент PianistGrid
            )}
        </div>
    );
}

export default PianistList;
