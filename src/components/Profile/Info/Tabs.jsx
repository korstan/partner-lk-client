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
        <div onClick={handleSave} className="info-tabs__element">
          Сохранить
        </div>
      )}
      {enableEditMode && (
        <div onClick={handleCancel} className="info-tabs__element">
          Отмена
        </div>
      )}
      {!enableEditMode && (
        <div onClick={handleEdit} className="info-tabs__element">
          Редактировать
        </div>
      )}
    </div>
  );
}
