export default function NotFound() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          justifyContent: 'center',
          justifyItems: 'center',
          alignSelf: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <img
          src="/svg/404.webp"
          alt="page-not-found"
          style={{
            width: '290px',
            height: '190px',
            display: 'flex',
          }}
        />
        <span
          style={{
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '-0.57%',
            textAlign: 'center',
            color: '#DEE2E6',
          }}
        >
          페이지를 찾을 수 없습니다.
        </span>
      </div>
    </div>
  );
}
