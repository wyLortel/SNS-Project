import "./App.css";

function App() {
  return (
    <div>
      {/* 타이포 그래피 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-black">text-xl</div>
      <div className="text-2xl font-extrabold">text-2xl</div>
      <div className="text-[13px] text-[rgb(100,300,20)]">text-13px</div>

      {/* 백그라운드 컬러 */}
      <div className="bg-amber-500">amber-500</div>

      {/* 사이즈 */}
      <div className="h-20 w-full bg-blue-500">box</div>

      {/* 여백 */}
      <div className="m-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>

      {/* 보더 */}
      <div className="mx-5 border-x-2 border-y-2 border-red-500">border</div>
      <div className="mx-5 rounded-2xl border-t-2 border-b-2">border</div>

      {/* 플레스 컨테이너 */}
      <div className="flex items-start justify-evenly">
        <div className="h-10 w-10 flex-1 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </div>
  );
}

export default App;
