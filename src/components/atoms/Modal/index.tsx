import { Box, Modal as MUIModal, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  title: string;
  detail: string;
};

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  whiteSpace: 'pre-wrap',
};

export const Modal: VFC<ModalProps> = (props: ModalProps) => {
  const { open, handleClose, title, detail } = props;
  return (
    <MUIModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {detail}
        </Typography>
        <Link to="/home">一覧に戻る</Link>
      </Box>
    </MUIModal>
  );
};
