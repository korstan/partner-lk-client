import React from 'react';

export default function ProfileInfoTabs({
  enableEditMode,
  handleSave,
  handleCancel,
  handleEdit,
}) {
  return (
    <div className="info-tabs__container">
      {enableEditMode && (
        <button type="button" onClick={handleSave} className="info-tabs__element">
          Сохранить
        </button>
      )}
      {enableEditMode && (
        <button type="button" onClick={handleCancel} href="#" className="info-tabs__element">
          Отмена
        </button>
      )}
      {!enableEditMode && (
        <button type="button" onClick={handleEdit} href="#" className="info-tabs__element">
          Редактировать
        </button>
      )}
    </div>
  );
}
