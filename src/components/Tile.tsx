interface TileComponentProps {
  name: string;
}

export const ModuleComponent = ({ name }: TileComponentProps) => {
  return <div className="p-2 bg-red-100 font-semibold">{name}</div>;
};

export const LessonComponent = ({ name }: TileComponentProps) => {
    return <div className="p-2 font-normal">{name}</div>;
  };