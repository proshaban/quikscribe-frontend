declare module '@ffmpeg/ffmpeg';
import FFmpeg from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

const ffmpeg = FFmpeg.createFFmpeg();

export class TranscriptionService {
  private static instance: TranscriptionService;
  private ffmpegLoaded = false;

  private constructor() {}

  static getInstance(): TranscriptionService {
    if (!TranscriptionService.instance) {
      TranscriptionService.instance = new TranscriptionService();
    }
    return TranscriptionService.instance; 
  }

  async init() {
    if (!this.ffmpegLoaded) {
      await ffmpeg.load();
      this.ffmpegLoaded = true;
    }
  }

  async convertToWav(file: File): Promise<Uint8Array> {
    await ffmpeg.load();

    await this.init();
    
    ffmpeg.FS('writeFile', file.name, await fetchFile(file));
    
    await ffmpeg.run(
      '-i', file.name,
      '-ar', '16000',
      '-ac', '1',
      '-c:a', 'pcm_s16le',
      'output.wav');

    const data = await ffmpeg.FS('readFile', 'output.wav');

    ffmpeg.FS('unlink', file.name);
    ffmpeg.FS('unlink', 'output.wav');

    return data as Uint8Array;
  }

  // Simulate AI transcription (in a real app, this would call an AI service)
  async transcribe(_audioData: Uint8Array, onProgress: (progress: number) => void): Promise<string> {
    // Simulate processing time
    const totalSteps = 100;
    for (let i = 0; i < totalSteps; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      onProgress((i / totalSteps) * 100);
    }

    // Return simulated transcription
    return `[Speaker 1] This is a simulated transcription of the audio file.
[Speaker 2] The actual implementation would use a real AI service.
[Speaker 1] Such as Whisper API or a similar service.
[Speaker 2] With proper speaker diarization and timestamps.`;
  }
}