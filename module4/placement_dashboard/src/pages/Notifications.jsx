import { useNotifications } from "../context/NotificationContext";

function Notifications() {
  const {
    notifications,
    removeNotification
  } = useNotifications();

  return (
    <div className="notifications-page">

      {/* Page Header */}

      <div className="notifications-header">
        <h1>Notifications</h1>

        <p>
          Stay updated with job openings,
          interviews, and application updates.
        </p>
      </div>

      {/* Notifications */}

      {notifications.length > 0 ? (
        <div className="notifications-list">

          {notifications.map((notification) => (
            <div
              className="notification-card"
              key={notification.id}
            >

              <div className="notification-icon">
                🔔
              </div>

              <div className="notification-content">

                <div className="notification-title-row">
                  <h2>
                    {notification.title}
                  </h2>

                  <span className="notification-type">
                    {notification.type}
                  </span>
                </div>

                <p>
                  {notification.message}
                </p>

                <button
                  className="remove-notification-button"
                  onClick={() =>
                    removeNotification(
                      notification.id
                    )
                  }
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="no-notifications">
          <div className="empty-notification-icon">
            🔔
          </div>

          <h2>No Notifications</h2>

          <p>
            You don't have any notifications
            at the moment.
          </p>
        </div>
      )}

    </div>
  );
}

export default Notifications;